import type { Author } from '@/types/author'
import { authors } from '@/data/authors'
import { computed } from 'vue'

export function useAuthors() {
  const getAuthorById = (authorId: MaybeRef<Author['id'] | null>) => {
    return computed(() => authors.find(a => a.id === unref(authorId)) ?? null)
  }

  const getAllAuthors = () => shallowReadonly(authors)

  return {
    getAuthorById,
    getAllAuthors,
  }
}
