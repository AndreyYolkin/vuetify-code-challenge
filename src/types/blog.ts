import type { Author } from './author'

export interface Post {
  id: string
  title: string
  text: string
  authorId: Author['id']
  createdAt: string
  updatedAt: string
}

export type NewPost = Pick<Post, 'authorId' | 'text' | 'title'>
