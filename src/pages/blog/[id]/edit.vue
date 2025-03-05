<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-card-title>
            Edit Post
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              v-model="isValid"
              @submit.prevent="save"
            >
              <v-text-field
                v-model="editedPost.title"
                label="Title"
                :rules="blogValidationRules.title"
                required
              />

              <v-textarea
                v-model="editedPost.text"
                label="Content"
                :rules="blogValidationRules.text"
                required
              />

              <author-info
                v-if="selectedAuthor"
                :author="selectedAuthor"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="error"
              variant="text"
              :to="`/blog/${postId}`"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              variant="tonal"
              :disabled="!isValid"
              @click="save"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '@/stores/blog'
import type { Post } from '@/types/blog';
import { authors } from '@/data/authors';
import type { VForm } from 'vuetify/components';
import { blogValidationRules } from '@/utils/validations';
import AuthorInfo from '@/components/AuthorInfo.vue';

const route = useRoute('/blog/[id]/edit')
const router = useRouter()
const blogStore = useBlogStore()

const form = ref<InstanceType<typeof VForm> | null>(null)
const isValid = ref(false)

const editedPost = ref<Post>({ title: '', text: '', authorId: '', id: '', createdAt: '', updatedAt: '' })

const selectedAuthor = computed(() => authors.find(author => author.id === editedPost.value.authorId))
const postId = computed(() => route.params.id)

function loadPost() {
  const foundPost = blogStore.posts.find(p => p.id === postId.value)
  if (foundPost) {
    editedPost.value = { ...foundPost }
  } else {
    router.push('/404')
  }
}

async function save() {
  if (!form.value) return
  const { valid } = await form.value.validate()
  if (valid) {
    blogStore.updatePost(postId.value, editedPost.value)
    router.push(`/blog/${postId.value}`)
  }
}

loadPost()
</script>
