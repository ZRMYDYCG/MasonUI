import type { DefaultTheme } from 'vitepress'

export function getNav(): DefaultTheme.NavItem[] {
  return [
    { text: '指南', link: '/guide/basic/' },
    { text: '设计', link: '/design/color/' },
    { text: '组件', link: '/components/button/' },
    { text: '指令', link: '/directives/ripple/' },
    { text: '联系我们', link: '/contact/ ' },
  ]
}
