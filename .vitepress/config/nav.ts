import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
    { text: '首页', link: '/' },
    {
        text: '前端物语',
        items: [
            { text: 'HTML+CSS', link: '/guide/basic/htmlCss/', activeMatch: '/guide/basic/htmlCss/' },
            { text: 'JavaScript', link: '/guide/basic/javascript/', activeMatch: '/guide/basic/javascript/' },
            { text: 'TypeScript', link: '/guide/basic/typescript/', activeMatch: '/guide/basic/typescript/' },
            { text: 'Vue', link: '/guide/basic/vue/', activeMatch: '/guide/basic/vue/' },
            { text: 'React', link: '/guide/basic/react/', activeMatch: '/guide/basic/react/' },
            { text: 'Electron', link: '/guide/basic/electron/', activeMatch: '/guide/basic/electron/' },
            { text: 'Webpack', link: '/guide/basic/webpack/', activeMatch: '/guide/basic/webpack/' },
            { text: 'Vite', link: '/guide/basic/vite/', activeMatch: '/guide/basic/vite/' },
            { text: 'Node', link: '/guide/basic/node/', activeMatch: '/guide/basic/node/' },
            { text: 'Koa', link: '/guide/basic/koa/', activeMatch: '/guide/basic/koa/' },
            { text: 'Express', link: '/guide/basic/express/', activeMatch: '/guide/basic/express/' },
        ]
    },
    {
        text: '后端访探',
        items: [
            { text: 'Java', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
            { text: 'MySQL', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
            { text: 'JDBC', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
            { text: 'JavaWeb', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
            { text: 'Maven', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
            { text: 'SpringBoot', link: '/guide/basic/HtmlCss/', activeMatch: '/guide/basic/HtmlCss/' },
        ]
    },
    { text: '源码阅读', link: '/markdown-examples' },
    { text: '奇淫技巧', link: '/markdown-examples' },
    {
        text: '面试题',
        items: [
            { text: 'HTML', link: '/guide/interviewQuestion/html', activeMatch: '/guide/interviewQuestion/html' },
            { text: 'CSS', link: '/guide/interviewQuestion/css', activeMatch: '/guide/interviewQuestion/css' },
            { text: 'JavaScript', link: '/guide/interviewQuestion/javascript', activeMatch: '/guide/interviewQuestion/javascript' },
            { text: 'Vue', link: '/guide/interviewQuestion/vue', activeMatch: '/guide/interviewQuestion/vue' },
            { text: 'React', link: '/guide/interviewQuestion/react', activeMatch: '/guide/interviewQuestion/react' },
            { text: 'Vite', link: '/guide/interviewQuestion/vite', activeMatch: '/guide/interviewQuestion/vite' },
            { text: 'Webpack', link: '/guide/interviewQuestion/webpack', activeMatch: '/guide/interviewQuestion/webpack' },
        ]
    },
    { text: '提效工具', link: '/guide/effect/' },
    { text: '踩坑记录', link: '/markdown-examples' },
]