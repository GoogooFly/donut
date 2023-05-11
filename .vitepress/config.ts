import { defineConfig } from 'vitepress'
import { head } from './config/head';
import { nav } from './config/nav';
import { sidebar } from './config/sidebar';
import { search } from './config/search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Donut",
  description: "一个摸鱼工具",
  lang: 'zh-CN',
  lastUpdated:true,
  head,
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://github.com/GoogooFly/donut' },
    ja: { label: '日本語', link: 'https://github.com/GoogooFly/donut' },
    es: { label: 'Español', link: 'https://github.com/GoogooFly/donut' },
    pt: { label: 'Português', link: 'https://github.com/GoogooFly/donut' },
  },
  themeConfig: {
    logo: '/logo-64×64.svg',
    lastUpdatedText: '上次更新',
    outline: {
      label: '本页目录'
    },
    nav,
    sidebar,
    search,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoogooFly' }
    ],
    editLink: {
      pattern: 'https://github.com/GoogooFly/donut/issues',
      text: '为此页提供修改建议'
    },
    footer: {
      message: '如有转载请标注本站原文地址',
      copyright: 'Copyright © 2023-present Donut'
    }
  },
})
