<template>
  <v-app>
    <router-view />
    <v-snackbar-queue v-model="queue" />
  </v-app>
</template>

<script lang="ts" setup>
import type { Toast } from '@/types/toast'
import { VSnackbarQueue } from 'vuetify/labs/VSnackbarQueue'
import { toastKey } from './contants/toast'

interface ToastQueue {
  text: string
  color?: string
  timeout: number
}

const queue = ref<Array<ToastQueue>>([])

function toast(toast: Toast) {
  queue.value.push({
    text: toast.message,
    color: toast.type,
    timeout: toast.timeout || 3000,
  })
}

provide(toastKey, toast)
</script>
