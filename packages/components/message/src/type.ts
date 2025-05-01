export type MessageType = 'success' | 'error' | 'warning' | 'info'

export interface MessageOptions {
  type: MessageType
  content: string
  duration?: number
  onClose?: () => void
}
