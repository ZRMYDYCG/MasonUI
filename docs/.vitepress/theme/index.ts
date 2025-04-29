import type { AppContext, Plugin } from 'vue'
import * as components from '@mason-ui/components'
import Theme from 'vitepress/theme'
import MyLayout from './Layout.vue'
import './index.scss'
import '@mason-ui/theme-chalk/src/index.scss'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }: AppContext) {
    // 引入组件库
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)) {
        if (key.startsWith('M')) {
          const element = components[key as keyof typeof components]
          app.use(element as Plugin<[]>)
        }
      }
    }
  },
}
