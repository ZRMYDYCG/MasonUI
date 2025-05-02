import { withInstall } from '@mason-ui/utils'
import ButtonGroup from './src/button-group.vue'
import Button from './src/button.vue'

export const MButton = withInstall(Button)
export const MButtonGroup = withInstall(ButtonGroup)
export default MButton
export * from './src/type'

declare module 'vue' {
  export interface GlobalComponents {
    MButton: typeof MButton
    MButtonGroup: typeof MButtonGroup
  }
}
