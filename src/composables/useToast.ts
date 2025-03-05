import type { Toast } from '@/types/toast'
import { toastKey } from '@/contants/toast'

export function useToast() {
  const toast = inject<(message: Toast) => void>(toastKey)!
  return toast
}
