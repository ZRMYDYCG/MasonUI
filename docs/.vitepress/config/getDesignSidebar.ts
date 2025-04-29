import type { DefaultTheme } from 'vitepress'

export function getDesignSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '设计',
      items: [
        { text: '颜色', link: '/design/color/' },
        { text: '图标', link: '/design/icon/' },
        { text: '变量预览', link: '/design/var/' },
      ],
    },
  ]
}
