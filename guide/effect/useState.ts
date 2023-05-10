import type { TState } from './state';

const vueState: TState = [
    {
        index: 0,
        title: "Vue3",
        icon: "https://cn.vuejs.org/logo.svg",
        href: "https://cn.vuejs.org/",
        desiction: "渐进式 JavaScript 框架"
    },
    {
        index: 1,
        title: "Vue2",
        icon: "https://cn.vuejs.org/logo.svg",
        href: "https://v2.cn.vuejs.org/",
        desiction: "渐进式 JavaScript 框架"
    },
    {
        index: 2,
        title: "Vue Router",
        icon: "https://cn.vuejs.org/logo.svg",
        href: "https://router.vuejs.org/zh/",
        desiction: "Vue.js 的官方路由 为 Vue.js 提供富有表现力、可配置的、方便的路由"
    },
    {
        index: 3,
        title: "Pinia",
        icon: "https://pinia.vuejs.org/logo.svg",
        href: "https://pinia.vuejs.org/zh",
        desiction: "符合直觉的 Vue.js 状态管理库"
    },
    {
        index: 4,
        title: "Nuxt.js",
        icon: "https://nuxt.com/icon.png",
        href: "https://nuxt.com/",
        desiction: "一个基于 Vue.js 的通用应用框架"
    },
    {
        index: 5,
        title: "VueUse",
        icon: "https://vueuse.org/favicon.svg",
        href: "https://vueuse.org/",
        desiction: "Vue Composition API 的常用工具集"
    },
    {
        index: 6,
        title: "NaiveUI",
        icon: "https://www.naiveui.com/assets/naivelogo-93278402.svg",
        href: "https://www.naiveui.com/zh-CN/os-theme",
        desiction: "一个 Vue 3 组件库"
    },
]


const reactState: TState = [
    {
        index: 0,
        title: "React",
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        href: "https://react.docschina.org/",
        desiction: "React 用于构建用户界面的 JavaScript 库"
    },
    {
        index: 1,
        title: "React Router",
        icon: "https://reactrouter.com/favicon-light.png",
        href: "https://reactrouter.com/en/main",
        desiction: "React 的声明式路由"
    },
    {
        index: 2,
        title: "Redux",
        icon: "https://cn.redux.js.org/img/redux.svg",
        href: "https://cn.redux.js.org/",
        desiction: "JavaScript 应用的状态容器，提供可预测的状态管理"
    },
    {
        index: 3,
        title: "UmiJS",
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        href: "https://umijs.org/",
        desiction: "插件化的企业级前端应用框架"
    },
    {
        index: 4,
        title: "Ant Design",
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        href: "https://ant.design/index-cn",
        desiction: "一套企业级 UI 设计语言和 React 组件库"
    },
    {
        index: 5,
        title: "Ant Design Mobile",
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        href: "https://mobile.ant.design/zh",
        desiction: "构建移动 WEB 应用程序的 React 组件库"
    },
    {
        index: 6,
        title: "ahooks",
        icon: "https://ahooks.js.org/simple-logo.svg",
        href: "https://ahooks.js.org/zh-CN/",
        desiction: "一套高质量可靠的 React Hooks 库"
    },
]

export const useState = () => {
    return {
        vueState,
        reactState
    }
}