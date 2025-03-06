<template>
  <v-container>
    <v-row>
      <v-col
        v-if="hasPosts"
        cols="12"
      >
        <post-search
          v-model="search"
        />
      </v-col>

      <v-fade-transition mode="out-in">
        <v-col v-if="hasPosts && hasFilteredPosts">
          <v-row>
            <v-fade-transition group>
              <v-col
                v-for="post in filteredPosts"
                :key="post.id"
                cols="12"
                md="6"
              >
                <post-card
                  :post="post"
                />
              </v-col>
            </v-fade-transition>
          </v-row>
        </v-col>

        <v-col
          v-if="hasPosts && !hasFilteredPosts"
          cols="12"
        >
          <not-found-posts />
        </v-col>
      </v-fade-transition>
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

const search = ref('')

const filteredPosts = computed(() => {
  if (search.value && search.value.trim().length > 0) {
    return blogStore.posts.filter(post =>
      post.title.toLowerCase().includes(search.value.toLowerCase())
      || post.text.toLowerCase().includes(search.value.toLowerCase()),
    )
  }
  return blogStore.posts
})

const hasFilteredPosts = computed(() => filteredPosts.value.length > 0)
</script>
