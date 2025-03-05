<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title>
            Edit Post
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="editedPost.title"
              label="Title"
            />

            <v-textarea
              v-model="editedPost.text"
              label="Content"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="error"
              variant="text"
              :to="`/blog/${postId}`"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              variant="tonal"
              @click="save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import type { Post } from '@/types/blog';

const route = useRoute('/blog/[id]/edit')
const router = useRouter()
const blogStore = useBlogStore()

const editedPost = ref<Post>({ title: '', text: '', author: '', id: '', createdAt: '', updatedAt: '' })
const postId = computed(() => route.params.id)

function loadPost() {
  const foundPost = blogStore.posts.find(p => p.id === postId.value)
  if (foundPost) {
    editedPost.value = { ...foundPost }
  } else {
    router.push('/')
  }
}

function save() {
  blogStore.updatePost(postId.value, editedPost.value)
  router.push(`/blog/${postId.value}`)
}

loadPost()
</script>
