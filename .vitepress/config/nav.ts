import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    {
        text: '前端物语',
        items: [
            { text: 'HTML+CSS', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
            { text: 'JavaScript', link: '/guide/basic/JavaScript/', activeMatch: '/guide/basic/JavaScript/' },
            { text: 'TypeScript', link: '/guide/basic/TypeScript/', activeMatch: '/guide/basic/TypeScript/' },
            { text: 'Vue', link: '/guide/basic/Vue/', activeMatch: '/guide/basic/Vue/' },
            { text: 'React', link: '/guide/basic/React/', activeMatch: '/guide/basic/React/' },
            { text: 'Electron', link: '/guide/basic/Electron/', activeMatch: '/guide/basic/Electron/' },
            { text: 'Webpack', link: '/guide/basic/Webpack/', activeMatch: '/guide/basic/Webpack/' },
            { text: 'Vite', link: '/guide/basic/Vite/', activeMatch: '/guide/basic/Vite/' },
            { text: 'Node', link: '/guide/basic/Node/', activeMatch: '/guide/basic/Node/' },
            { text: 'Koa', link: '/guide/basic/Koa/', activeMatch: '/guide/basic/Koa/' },
            { text: 'Express', link: '/guide/basic/Express/', activeMatch: '/guide/basic/Express/' },
        ]
    },
    { text: '源码阅读', link: '/markdown-examples' },
    { text: '奇淫技巧', link: '/markdown-examples' },
    { text: '面试题', link: '/markdown-examples' },
    { text: '提效工具', link: '/markdown-examples' },
    { text: '踩坑记录', link: '/markdown-examples' },
]