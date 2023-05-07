# Vue 脚手架

## 简介

Vue脚手架是Vue官方提供的标准化开发工具（开发平台），它提供命令行和UI界面，方便创建vue工程、配置第三方依赖、编译vue工程。

:::tip 注意
Vue脚手架是用来方便开发的，但vue脚手架不是最终发布到生产环境的产品。很多人会误认为生产环境也要安装vue脚手架。
:::

## 步骤

1. 全局安装 `vue/cli`

```bash
npm install -g @vue/cli
```

2. 选择创建的目录

```bash
vue create vue-demo
```

3. 进入项目目录

```bash
cd vue-demo
```

4. 下载项目依赖

```bash
npm install
```

5. 启动项目

```bash
npm run serve
```

:::warning 注意
1. 如果下载缓慢，请配置淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org
```

2. Vue 脚手架隐藏了所有 Webpack 相关的配置，若想查看具体的 Webpack 配置，请执行：

```bash
vue inspect > output.js
```
:::