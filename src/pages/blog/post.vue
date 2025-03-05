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
            <v-text-field
              v-model="newPost.title"
              label="Title"
            />

            <v-textarea
              v-model="newPost.text"
              label="Content"
            />

            <v-text-field
              v-model="newPost.author"
              label="Author"
            />
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

const router = useRouter()
const blogStore = useBlogStore()

const newPost = ref<NewPost>({
  title: '',
  text: '',
  author: ''
})

function save() {
  blogStore.createPost(newPost.value)
  router.push('/')
}
</script>
