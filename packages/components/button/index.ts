import { withInstall } from '@mason-ui/utils'
import Button from './src/button.vue'

export const MButton = withInstall(Button)
export default MButton
export * from './src/type'

declare module 'vue' {
  export interface GlobalComponents {
    MButton: typeof MButton
  }
}
