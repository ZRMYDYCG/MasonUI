import type { Plugin } from 'vue'
import * as components from '@mason-ui/components'
import { createApp } from 'vue'

import App from './App.vue'
import '@mason-ui/theme-chalk/src/index.scss'

const app = createApp(App)

for (const key in components) {
  if (Object.prototype.hasOwnProperty.call(components, key)) {
    if (key.startsWith('M')) {
      const element = components[key as keyof typeof components]
      app.use(element as Plugin<[]>)
    }
  }
}

app.mount('#app')
