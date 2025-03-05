<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title>
            Create New Post
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              v-model="isValid"
              @submit.prevent="save"
            >
              <v-text-field
                v-model="newPost.title"
                label="Title"
                :rules="blogValidationRules.title"
                required
              />

              <v-textarea
                v-model="newPost.text"
                label="Content"
                :rules="blogValidationRules.text"
                required
              />

              <v-text-field
                v-model="newPost.author"
                label="Author"
                :rules="blogValidationRules.author"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="error"
              variant="text"
              :to="'/'"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              variant="tonal"
              :disabled="!isValid"
              @click="save"
            >
              Create
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import type { NewPost } from '@/types/blog';
import type { VForm } from 'vuetify/components';
import { blogValidationRules } from '@/utils/validations';

const router = useRouter()
const blogStore = useBlogStore()

const form = ref<InstanceType<typeof VForm> | null>(null)
const isValid = ref(false)

const newPost = ref<NewPost>({
  title: '',
  text: '',
  author: ''
})

async function save() {
  if (!form.value) return
  const { valid } = await form.value.validate()
  if (valid) {
    blogStore.createPost(newPost.value)
    router.push('/')
  }
}
</script>
