import type { TState } from './state';

export const nodeState: TState = [
    { 
        index: 0, 
        title: "Node.js", 
        icon: "/assets/svg/Nodejs.svg", 
        href: "https://nodejs.org/zh-cn", 
        desiction: "一个基于 Chrome V8 引擎的 JavaScript 运行环境" 
    },
    { 
        index: 1, 
        title: "Express", 
        icon: "https://expressjs.com/images/favicon.png", 
        href: "https://expressjs.com/", 
        desiction: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架" 
    },
    { 
        index: 2, 
        title: "Koa", 
        icon: "/assets/svg/Koa.svg", 
        href: "https://koa.bootcss.com/", 
        desiction: "基于 Node.js 平台的下一代 web 开发框架" 
    },
    { 
        index: 3, 
        title: "Egg", 
        icon: "	https://www.eggjs.org/logo.svg", 
        href: "https://www.eggjs.org/zh-CN", 
        desiction: "为企业级框架和应用而生" 
    }
]