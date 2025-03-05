import { defineStore } from 'pinia'
import { useLocalStorage } from '@/composables/useLocalStorage'
import type { Post, NewPost } from '@/types/blog'
import { getId } from '@/utils/getId'

export const useBlogStore = defineStore('blog', () => {
  const posts = useLocalStorage<Post[]>('blog-posts', [])

  function createPost(post: NewPost) {
    const now = new Date()
    const ISODate = now.toISOString()
    const id = getId()

    const newPost: Post = {
      ...post,
      id,
      createdAt: ISODate,
      updatedAt: ISODate
    }
    posts.value.push(newPost)
  }

  function updatePost(id: Post['id'], post: Post) {
    const now = new Date()
    const ISODate = now.toISOString()
    const index = posts.value.findIndex(p => p.id === id)

    if (index !== -1) {
      posts.value[index] = {
        ...posts.value[index],
        title: post.title,
        text: post.text,
        updatedAt: ISODate
      }
    }
  }

  function deletePost(id: Post['id']) {
    posts.value = posts.value.filter(post => post.id !== id)
  }

  return {
    posts,
    createPost,
    updatePost,
    deletePost
  }
})
