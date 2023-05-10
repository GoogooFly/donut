import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
    '/guide/basic/vue/':[
        { text: 'Vue 简介', link: '/guide/basic/vue/' },
        { text: 'MVVM', link: '/guide/basic/vue/MVVM' },
        { text: '数据代理', link: '/guide/basic/vue/defineproperty' },
        { text: '事件处理', link: '/guide/basic/vue/event' },
        { text: '计算属性', link: '/guide/basic/vue/computed' },
        { text: '监视属性', link: '/guide/basic/vue/watch' },
        { text: '过滤属性', link: '/guide/basic/vue/filter' },
        { text: '动态样式绑定', link: '/guide/basic/vue/bindStyle' },
        { text: '内置指令', link: '/guide/basic/vue/builtInDirective' },
        { text: '自定义指令', link: '/guide/basic/vue/customDirective' },
        { text: '生命周期', link: '/guide/basic/vue/lifeCycle' },
        { text: 'Vue 脚手架', link: '/guide/basic/vue/scaffold' },
        { text: '组件', link: '/guide/basic/vue/components' },
        { text: 'Vuex', link: '/guide/basic/vue/vuex' },
        { text: '路由', link: '/guide/basic/vue/router' },
    ],
    '/guide/basic/react/':[
        { text: 'React 简介', link: '/guide/basic/react/' },
        { text: 'JSX 语法规则', link: '/guide/basic/react/jsx' },
        { text: '脚手架', link: '/guide/basic/react/scaffold' },
        { text: '组件', link: '/guide/basic/react/components' },
        { text: '事件处理', link: '/guide/basic/react/event' },
        { text: '生命周期', link: '/guide/basic/react/lifeCycle' },
        { text: '路由', link: '/guide/basic/react/router' },
        { text: '状态管理', link: '/guide/basic/react/state' },
        { text: 'Hooks', link: '/guide/basic/react/hooks' },
    ],
    '/guide/basic/htmlCss/': [
        { text: 'CSS 简介', link: '/guide/basic/htmlCss/' },
        { text: '常见样式', link: '/guide/basic/htmlCss/commonCss' },
    ],
    '/guide/basic/javascript/': [
        { text: 'JavaScript 简介', link: '/guide/basic/javascript/' },
        { text: '声明变量', link: '/guide/basic/javascript/variable' },
        { text: '数据类型', link: '/guide/basic/javascript/dataType' },
        { text: '运算符', link: '/guide/basic/javascript/operator' },
        { text: '流程控制', link: '/guide/basic/javascript/processControl' },
        { text: '函数语法', link: '/guide/basic/javascript/func' },
        { text: 'Object 和 Function', link: '/guide/basic/javascript/objFunc' },
        { text: 'Array 构造器', link: '/guide/basic/javascript/array' },
        { text: '原始类型包装器', link: '/guide/basic/javascript/wrapper' },
        { text: 'Math 对象', link: '/guide/basic/javascript/mathObj' },
        { text: 'Date 构造函数', link: '/guide/basic/javascript/dateFunc' },
        { text: '正则表达式', link: '/guide/basic/javascript/regular' },
        { text: '错误处理', link: '/guide/basic/javascript/errorHandle' },
        { text: 'DOM 核心', link: '/guide/basic/javascript/domCore' },
        { text: 'DOM 事件', link: '/guide/basic/javascript/domEvent' },
        { text: 'BOM', link: '/guide/basic/javascript/bom' },
    ]
}