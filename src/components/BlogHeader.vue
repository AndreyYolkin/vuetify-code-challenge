<template>
  <v-container>
    <div class="d-flex align-center ga-3">
      <router-link
        class="text-h2 text-md-h1 text-decoration-none text-high-emphasis"
        to="/"
      >
        Blog Posts
      </router-link>
      <v-btn
        v-if="isRoot"
        icon="mdi-plus"
        class="mt-3"
        color="primary"
        to="/blog/post"
      />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'BlogHeader',
})

const route = useRoute()

const isRoot = computed(() => {
  return route.name === '/'
})
</script>
