import type { Ref, UnwrapRef } from 'vue'
import { effectScope, onScopeDispose, ref, watch } from 'vue'

/**
 * @title useLocalStorage
 * @param key string
 * @param defaultValue
 *
 * This is a naive implementation that combines Vue refs with localStorage.
 * Limitations:
 * 1. Doesn't handle loops
 * 2. Default value is mandatory
 *
 * It's a kind of a trade-off. On the one hand, it's better to use more complex solution, like @vueuse provides.
 * On the other hand, I will not store a real blog at localStorage.
 *
 * @returns ref
 *
 * @example
 * const count = useLocalStorage('count', 0)
 */
export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T, T> | Ref<UnwrapRef<T>, T | UnwrapRef<T>> {
  const storedValue = localStorage.getItem(key)
  const value = ref<T>(storedValue ? JSON.parse(storedValue) : defaultValue)

  const scope = effectScope()

  scope.run(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== null) {
        value.value = JSON.parse(event.newValue)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)

      onScopeDispose(() => {
        window.removeEventListener('storage', handleStorageChange)
      })
    }

    watch(
      value,
      (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
      },
      { deep: true },
    )
  })

  return value
}
