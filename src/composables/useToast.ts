import type { Toast } from '@/types/toast'
import { toastKey } from '@/constants/toast'

export function useToast() {
  const toast = inject<(message: Toast) => void>(toastKey)!
  return toast
}
