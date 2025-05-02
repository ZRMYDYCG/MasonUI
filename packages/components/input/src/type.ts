export interface inputProps {
  type: 'text' | 'password' | 'textarea'
  size?: 'large' | 'small'
  clearable?: boolean
  showPassword?: boolean
  disabled?: boolean
}

export interface inputEmits {
  (e: 'change', value: string): void
  (e: 'input', value: string): void
  (e: 'clear'): void
  (e: 'focus'): void
  (e: 'blur'): void
}
