export interface inputProps {
  modelValue: string
  type: string
  size?: 'large' | 'small'
  clearable?: boolean
  showPassword?: boolean
  disabled?: boolean
}

export interface inputEmits {
  // change 事件指的是修改了值, 并且失去了 focus 状态
  (e: 'change', value: string): void
  // input 事件指的是值有变化就算
  (e: 'input', value: string): void
  (e: 'clear'): void
  (e: 'focus', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
  (e: 'update:modelValue', value: string): void
}
