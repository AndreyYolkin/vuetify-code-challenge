<template>
  <v-card
    :to="`/blog/${post.id}`"
  >
    <v-card-title>
      {{ post.title }}
    </v-card-title>
    <v-card-text>
      <v-divider class="my-2" />
      <div class="d-flex justify-space-between align-center">
        <span class="text-caption">By {{ author?.name || 'Unknown Author' }}</span>
        <span class="text-caption">{{ new Date(post.createdAt).toLocaleDateString() }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import type { Post } from '@/types/blog'
import { useAuthors } from '@/composables/useAuthors'

defineOptions({
  name: 'PostCard',
})

const props = defineProps<{
  post: Post
}>()

defineEmits<{
  delete: [id: Post['id']]
}>()

const { getAuthorById } = useAuthors()
const author = getAuthorById(props.post.authorId)
</script>
