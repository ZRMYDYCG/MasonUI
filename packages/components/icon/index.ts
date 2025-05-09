import { withInstall } from '@mason-ui/utils'
import Icon from './src/icon.vue'

export const MIcon = withInstall(Icon)
export default MIcon
export * from './src/type'

declare module 'vue' {
  export interface GlobalComponents {
    MIcon: typeof MIcon
  }
}
