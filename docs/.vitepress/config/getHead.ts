import type { HeadConfig } from 'vitepress'

export function getHead(): HeadConfig[] {
  return [
    [
      'link',
      {
        rel: 'icon',
        href: '/image/logo.svg',
      },
    ],
  ]
}
