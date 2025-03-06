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

              <v-select
                v-model="newPost.authorId"
                label="Author"
                placeholder="Select an author"
                :items="authors"
                item-title="name"
                item-value="id"
                :rules="blogValidationRules.author"
                required
              >
                <template #selection="{ item }">
                  <author-info
                    v-if="item.raw"
                    :author="item.raw"
                    :size="24"
                  />
                </template>
              </v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="error"
              variant="text"
              to="/"
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
import type { NewPost } from '@/types/blog'
import type { VForm } from 'vuetify/components'
import AuthorInfo from '@/components/AuthorInfo.vue'
import { useAuthors } from '@/composables/useAuthors'
import { useToast } from '@/composables/useToast'
import { useBlogStore } from '@/stores/blog'
import { blogValidationRules } from '@/utils/validations'

const toast = useToast()

const router = useRouter()
const blogStore = useBlogStore()
const { getAllAuthors } = useAuthors()
const authors = getAllAuthors()

const form = ref<InstanceType<typeof VForm> | null>(null)
const isValid = ref(false)

const newPost = ref<NewPost>({
  title: '',
  text: '',
  authorId: '',
})

async function save() {
  if (!form.value)
    return
  const { valid } = await form.value.validate()
  if (valid) {
    const { id } = blogStore.createPost(newPost.value)
    toast({ message: 'Post created', type: 'success' })
    router.push(`/blog/${id}`)
  }
}
</script>
