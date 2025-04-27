import type { ExtractPropTypes, PropType } from 'vue'

export const buttonShapes = ['round', 'circle'] as const
export type ButtonShapeType = typeof buttonShapes[number]

export const buttonTypes = ['plain', 'text', 'link', 'dashed'] as const
export type ButtonTypeType = typeof buttonTypes[number]

export const buttonProps = {
  disabled: Boolean,
  loading: Boolean,
  shape: {
    type: String as PropType<ButtonShapeType>,
  },
  type: {
    type: String as PropType<ButtonTypeType>,
  },
} as const

export type ButtonType = ExtractPropTypes<typeof buttonProps>
