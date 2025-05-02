import type { ExtractPropTypes, PropType } from 'vue'
import { useIconProp } from '@mason-ui/hooks'

export const iconProps = {
  name: {
    ...useIconProp(),
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: [Number, String] as PropType<number | string>,
  },
  spin: {
    type: Boolean,
    default: false,
  },
} as const

export type IconType = ExtractPropTypes<typeof iconProps>
