import type { HeadConfig, DefaultTheme } from 'vitepress';


const useHead = (): HeadConfig[] => {
    return [
        ['link', { rel: 'icon', href: '/logo-220×220.svg' }],
    ]
}

const useNav = (): DefaultTheme.NavItem[] => {
    return [
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
}

const useSidebar = (): DefaultTheme.Sidebar => {
    return {
        '/guide/basic/Vue/':[
            { text: 'Vue 简介', link: '/guide/basic/Vue/' },
            { text: '理解 MVVM', link: '/guide/basic/Vue/MVVM' },
            { text: '数据代理', link: '/guide/basic/Vue/defineproperty' },
            { text: '事件处理', link: '/guide/basic/Vue/event' },
            { text: '计算属性', link: '/guide/basic/Vue/computed' },
            { text: '监视属性', link: '/guide/basic/Vue/watch' },
            { text: '过滤属性', link: '/guide/basic/Vue/filter' },
            { text: '动态样式绑定', link: '/guide/basic/Vue/bindStyle' },
            { text: '内置指令', link: '/guide/basic/Vue/builtInDirective' },
            { text: '自定义指令', link: '/guide/basic/Vue/customDirective' },
            { text: '生命周期', link: '/guide/basic/Vue/PLC' },
            { text: 'Vue 脚手架', link: '/guide/basic/Vue/scaffold' },
            { text: '组件', link: '/guide/basic/Vue/components' },
            { text: 'Vuex', link: '/guide/basic/Vue/Vuex' },
            { text: '路由', link: '/guide/basic/Vue/router' },
        ],
        '/guide/basic/HtmlCss/': [
            { text: 'HTML', link: '/guid/basic/HtmlCss/' },
        ]
    }
}

export const useSetupConfig = () => {
    return {
        useHead,
        useNav,
        useSidebar
    }
}