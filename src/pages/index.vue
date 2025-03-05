<template>
  <v-container>
    <v-row>
      <v-col
        v-for="post in blogStore.posts"
        :key="post.id"
        cols="12"
        md="6"
      >
        <post-card
          :post="post"
        />
      </v-col>
      <v-col
        v-if="!hasPosts"
        cols="12"
      >
        <no-posts />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()

const hasPosts = computed(() => blogStore.posts.length > 0)
</script>
