export interface inputProps {
  modelValue: string
  type: string
  size?: 'large' | 'small'
  clearable?: boolean
  showPassword?: boolean
  disabled?: boolean
}

export interface inputEmits {
  (e: 'update:modelValue', value: string): void
}
