# Vue 简介 {#intro-Vue}

## Vue 是什么

- Vue 是一套用于构建用户界面的渐进式 JavaScript 框架
- **渐进式**：Vue 可以自底向上逐层的应用
- **简单应用**：只需要一个轻量小巧的核心库（100kb）
- **复杂应用**：可以引入各式各样的 Vue 插件

## Vue 特点 {#characteristic-Vue}

- 采用[组件化模式]，提高代码复用率、且让代码更好维护
- [声明式]编码，让编码人员无需直接操作 DOM，提高开发效率
- 使用[虚拟DOM] + 优秀的[Diff]算法，尽量复用 DOM 节点

## 简单的 Vue 模板 {#easy-template-Vue}

```html
<div id="app">
  <h1>{{ Donut }}: Hello World!</h1>
</div>
```
```js

// 取消默认提示
Vue.config.productionTip = false;

const vm = new Vue({
  el: "#app",
  data:{
    user: "Donut"
  }
})

```