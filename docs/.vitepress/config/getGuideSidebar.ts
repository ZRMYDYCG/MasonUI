import type { DefaultTheme } from 'vitepress'

export function getGuideSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '指南',
      items: [
        { text: '基本介绍', link: '' },
        { text: '安装', link: '' },
        { text: '快速开始', link: '' },
        { text: '暗黑模式', link: '' },
        { text: '更新日志', link: '' },
      ],
    },
    {
      text: '进阶',
      items: [
        { text: '主题', link: '' },
        { text: '无障碍', link: '' },
        { text: '指令', link: '' },
      ],
    },
  ]
}
