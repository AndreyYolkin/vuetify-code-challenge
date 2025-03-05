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
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import PostCard from '@/components/PostCard.vue'
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()
</script>
