# 脚手架

## 简介

React 脚手架和 Vue 脚手架类似，都是用来帮助程序员快速创建一个基于 React 或 Vue 的模板项目

:::tip 备注
包含了所有需要的配置（语法检查、jsx编译、devServer 等等）
:::

## 步骤

1. 全局安装 `create-react-app`

```bash
npm install -g create-react-app 
```

2. 选择创建的目录

```bash
create-react-app react-demo
```

3. 进入项目目录

```bash
cd react-demo
```

4. 下载项目依赖

```bash
npm install
```

5. 启动项目

```bash
npm start
```

:::warning 注意
1. 如果下载缓慢，请配置淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org
```
:::

## 目录结构

```
.
├─ public ------------------------------> 静态资源文件夹
│  ├─ favicon.icon ---------------------> 网站页签图标
│  ├─ index.html -----------------------> 主页面
│  ├─ logo192.png ----------------------> logo
│  ├─ logo512.png ----------------------> logo
│  ├─ manifest.png ---------------------> 加壳应用的配置文件
│  └─ robots.txt -----------------------> 爬虫协议
└─ src ---------------------------------> 源码文件夹
   ├─ favicon.icon ---------------------> 网站页签图标
   ├─ App.css --------------------------> App 组件的样式
   ├─ App.js ---------------------------> App 组件
   ├─ App.test.js ----------------------> 用于 App 测试
   ├─ index.css ------------------------> 样式
   ├─ logo.svg -------------------------> logo 图片
   ├─ reportWebVitals.js ---------------> 页面性能分析文件（需要 web-vitals 的支持）
   └─ setupTests.js --------------------> 组件单元测试的文件（需要 jest-dom 库的支持）
```