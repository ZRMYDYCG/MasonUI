import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import { getComponentsSidebar } from './config/getComponentsSidebar'
import { getDesignSidebar } from './config/getDesignSidebar'
import { getDirectives } from './config/getDirectives'
import { getGuideSidebar } from './config/getGuideSidebar'
import { getHead } from './config/getHead'
import { getNav } from './config/getNav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MasonUI',
  base: '/',
  description: '基于 vue3 + typescript 的传统组件库',
  head: getHead(),
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin)
    },
  },
  themeConfig: {
    logo: '/image/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: getNav(),
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/design/': getDesignSidebar(),
      '/components/': getComponentsSidebar(),
      '/directives/': getDirectives(),
    } as any,
    socialLinks: [
      { icon: 'github', link: '' },
    ],
  },
})
