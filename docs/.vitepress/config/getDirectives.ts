import type { DefaultTheme } from 'vitepress'

export function getDirectives(): DefaultTheme.Sidebar {
  return [
    {
      text: 'Directives 指令',
      items: [
        { text: 'Ripple 水波纹', link: '/directives/ripple/' },
      ],
    },
  ]
}
