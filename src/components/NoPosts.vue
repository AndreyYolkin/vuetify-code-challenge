<template>
  <v-alert
    color="primary"
    variant="tonal"
  >
    No posts yet.
    <v-btn
      variant="tonal"
      class="ml-2"
      to="/blog/post"
    >
      Add one
    </v-btn>
  </v-alert>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'NoPosts',
})
</script>
