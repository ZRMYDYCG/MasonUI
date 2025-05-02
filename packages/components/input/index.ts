import { withInstall } from '@mason-ui/utils'
import Input from './src/input.vue'

export const MInput = withInstall(Input)
export default MInput
export * from './src/type'

declare module 'vue' {
  export interface GlobalComponents {
    MInput: typeof MInput
  }
}
