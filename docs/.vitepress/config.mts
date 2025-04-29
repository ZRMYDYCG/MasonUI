import { defineConfig } from 'vitepress'
import { getComponentsSidebar, getDesignSidebar, getDirectives, getGuideSidebar, getHead, getNav } from './config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MasonUI',
  description: '基于 vue3 + typescript 的传统组件库',
  head: getHead(),
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
