export type Post = {
  id: string
  title: string
  text: string
  author: string
  createdAt: string
  updatedAt: string
}

export type NewPost = Pick<Post, 'author' | 'text' | 'title'>
