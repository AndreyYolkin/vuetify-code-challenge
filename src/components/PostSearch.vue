<template>
  <v-text-field
    v-model="search"
    clearable
    single-line
    label="Search"
    append-inner-icon="mdi-magnify"
    hide-details
  />
</template>

<script setup lang="ts">
const search = defineModel<string | null>()
</script>
