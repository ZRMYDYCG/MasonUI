import type { App, Component, DefineComponent, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin
export function withInstall<T extends Component | DefineComponent>(component: T) {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const { name } = component as unknown as { name: string }
    app.component(name, component)
  }
  return component as SFCWithInstall<T>
}
