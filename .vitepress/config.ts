import { defineConfig } from 'vitepress'
import { head } from './config/head';
import { nav } from './config/nav';
import { sidebar } from './config/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Donut 笔记文档",
  description: "静态笔记文档站点",
  head,
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://github.com/GoogooFly/donut' },
  },
  themeConfig: {
    logo: '/logo-64×64.svg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoogooFly' }
    ]
  }
})
