<template>
  <div>
    <h1>Blog Page</h1>
    <!-- @vue-skip we'll define content later -->
    Blog {{ $route.params.id }}
    <v-btn to="/">
      Home
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
</script>
