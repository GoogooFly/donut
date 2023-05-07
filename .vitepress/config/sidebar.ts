import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
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
    '/guide/basic/React/':[
        { text: 'React 简介', link: '/guide/basic/React/' },
        { text: 'JSX 语法规则', link: '/guide/basic/React/jsx' },
        { text: '脚手架', link: '/guide/basic/React/scaffold' },
        { text: '组件', link: '/guide/basic/React/components' },
        { text: '事件处理', link: '/guide/basic/React/event' },
        { text: '生命周期', link: '/guide/basic/React/PLC' },
        { text: '路由', link: '/guide/basic/React/router' },
        { text: '状态管理', link: '/guide/basic/React/state' },
        { text: 'Hooks', link: '/guide/basic/React/hooks' },
    ],
    '/guide/basic/HtmlCss/': [
        { text: 'HTML', link: '/guid/basic/HtmlCss/' },
    ]
}