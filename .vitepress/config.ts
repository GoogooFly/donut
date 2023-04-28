import { defineConfig } from 'vitepress'
import { useSetupConfig } from './setupConfig';

const { useHead, useNav, useSidebar } = useSetupConfig();
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Donut 笔记文档",
  description: "静态笔记文档站点",
  head: useHead(),
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://github.com/GoogooFly/donut' },
  },
  themeConfig: {
    logo: '/logo-64×64.svg',
    nav: useNav(),
    sidebar: useSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoogooFly' }
    ]
  }
})
