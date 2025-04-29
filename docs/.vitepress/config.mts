import { defineConfig } from 'vitepress'
import { getHead } from './config/getHead'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MasonUI',
  description: '基于 vue3 + typescript 的传统组件库',
  head: getHead(),
  themeConfig: {
    logo: '/image/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide' },
      { text: '设计', link: '/design' },
      { text: '组件', link: '/components/button' },
      { text: '指令', link: '/directives' },
      { text: '联系我们', link: '/contact' },
    ],

    sidebar: [

    ],

    socialLinks: [
      { icon: 'github', link: '' },
    ],
  },
})
