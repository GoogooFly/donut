import { defineConfig } from 'vitepress'
import { head } from './config/head';
import { nav } from './config/nav';
import { sidebar } from './config/sidebar';
import { search } from './config/search';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Donut",
  description: "一个摸鱼工具",
  lastUpdated:true,
  head,
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://github.com/GoogooFly/donut' },
  },
  themeConfig: {
    logo: '/logo-64×64.svg',
    nav,
    sidebar,
    search,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoogooFly' }
    ],
    editLink: {
      pattern: 'https://github.com/GoogooFly/donut/issues',
      text: '为此页提供修改建议'
    }
  },
})
