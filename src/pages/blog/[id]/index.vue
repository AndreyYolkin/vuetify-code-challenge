<template>
  <v-container>
    <div class="d-flex flex-column gap-4">
      <span class="text-h4 text-md-h2 mb-3">{{ post?.title }}</span>
      <div class="d-flex align-center ga-2">
        <author-info
          :author="author"
        />
        <v-spacer />
        <v-btn
          variant="text"
          color="error"
          icon
        >
          <v-menu activator="parent">
            <v-card text="Are you sure?">
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="error"
                  @click="deletePost(postId)"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
        <v-btn
          color="primary"
          variant="text"
          icon="mdi-pencil-outline"
          :to="`/blog/${postId}/edit`"
        />
        <span class="text-subtitle-1">{{ post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : '' }}</span>
      </div>
      <v-divider class="my-4" />
      <p class="text-body-1 text-pre-wrap">
        {{ post?.text }}
      </p>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import type { Post } from '@/types/blog'
import AuthorInfo from '@/components/AuthorInfo.vue'
import { useAuthors } from '@/composables/useAuthors'
import { useToast } from '@/composables/useToast'
import { useBlogStore } from '@/stores/blog'

const toast = useToast()
const route = useRoute('/blog/[id]/')
const router = useRouter()
const blogStore = useBlogStore()

const post = ref<Post | null>(null)
const postId = computed(() => route.params.id as string)
const { getAuthorById } = useAuthors()

const authorId = computed(() => post.value?.authorId ?? null)
const author = getAuthorById(authorId)

function loadPost() {
  const foundPost = blogStore.posts.find(p => p.id === postId.value)
  if (foundPost) {
    post.value = foundPost
  }
  else {
    router.push('/404')
  }
}

loadPost()

function deletePost(id: string) {
  blogStore.deletePost(id)
  toast({ message: 'Post deleted' })
  router.replace('/')
}
</script>
