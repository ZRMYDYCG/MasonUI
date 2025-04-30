import type { DefaultTheme } from 'vitepress'

export function getComponentsSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: 'Layout 布局组件',
      items: [

      ],
    },
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Icon 图标', link: '/components/icon/' },
      ],
    },
    {
      text: 'Form 表单组件',
      items: [
      ],
    },
    {
      text: 'Data 数据展示组件',
      items: [

      ],
    },
    {
      text: 'Navigation 导航',
      items: [

      ],
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        { text: 'Message 全局提示', link: '/components/message/' },
      ],
    },
  ]
}
