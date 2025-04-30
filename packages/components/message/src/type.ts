import type { ExtractPropTypes, PropType } from 'vue'

export const messageProps = {
  /* 消息内容 */
  message: {
    type: String as PropType<string>,
    default: (): string => '',
  },
  /* 提示类型 */
  type: {
    type: String as PropType<string>,
    default: (): string => '',
  },
  /* 层级 */
  zIndex: {
    type: [Number, String] as PropType<number | string>,
    default: (): number | string => 999,
  },
  /* 消息 id */
  id: {
    type: String as PropType<string>,
  },
  onDestroy: {
    type: Function as PropType<() => void>,
  },
  duration: {
    type: Number as PropType<number>,
    default: (): number => 300,
  },
} as const

export const messageEmits = {
  destroy: () => true,
  close: () => true,
}

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export type MessageType = ExtractPropTypes<typeof messageProps>
