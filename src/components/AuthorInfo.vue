<template>
  <div class="d-flex align-center ga-2">
    <v-avatar
      v-if="author?.avatar"
      :image="author.avatar"
      :size="size"
    />
    <span class="text-subtitle-1">By {{ author?.name || 'Unknown Author' }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { Author } from '@/types/author'

withDefaults(defineProps<{
  author: Author | null
  size?: number
}>(), {
  size: 32,
})
</script>
