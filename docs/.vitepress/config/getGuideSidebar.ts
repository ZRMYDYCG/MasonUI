import type { DefaultTheme } from 'vitepress'

export function getGuideSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '指南',
      items: [
        { text: '基本介绍', link: '/guide/basic/' },
        { text: '安装', link: '/guide/install/' },
        { text: '快速开始', link: '/guide/quickstart/' },
        { text: '暗黑模式', link: '/guide/dark-mode/' },
        { text: '更新日志', link: '/guide/logs/' },
      ],
    },
    {
      text: '进阶',
      items: [
        { text: '主题', link: '/guide/theme/' },
        { text: '无障碍', link: '/guide/accessibility/' },
        { text: '指令', link: '/guide/directive/' },
      ],
    },
  ]
}
