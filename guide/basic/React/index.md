# React 简介 {#intro-React}

## React 是什么

React 就是用于构建用户界面的 JavaScript 库

是一个将数据渲染为 HTML 视图开源 JavaScript 库

## React 特点

|     特点     |                            作用                                 |
| :---------: | :-------------------------------------------------------------: |
| Virtual DOM | 只有在必要的时候才回去操作 DOM ，通过减少低效的操作，来提高性能          |
| 组件化编码   | 方便后期维护，提高代码复用率，减少代码体积                             |
| 单向数据流   | React 中的数据仅沿一个方向流动，即数据从上到下传输，即从父组件传输到子组件 |
| JSX 语法    | JSX 是 JavaScript 和 HTML 的结合体，支持样式、逻辑表达式和事件         |

## React 高效的原因

1. Virtual DOM ，不总是直接操作DOM
2. DOM Diff 算法，最小化页面重绘

## 创建虚拟 DOM

1. JSX

```jsx
const VDOM = (
    <h1>
        <span>hello world</span>
    </h1>
);

ReactDOM.render(VDOM, document.getElementById("App"));
```

2. JavaScript（一般不用）

```js
const VDOM = React.createElement('h1', { id: 'title', '内容' });

ReactDOM.render(VDOM, document.getElementById('App'));
```

## React 基本使用

```html
<body>
    <div id="App"></div>

    <!-- 引入 react 核心库 -->
    <script type="text/javascript" src="react.development.js"></script>
    <!-- 引入 react-dom ，用于支持 react 操作 DOM -->
    <script type="text/javascript" src="react-dom.development.js"></script>
    <!-- 引入 babel ，用于将 jsx 转为 js -->
    <script type="text/javascript" src="babel.min.js"></script>
    <script type="text/babel">
        // 创建虚拟 DOM
        const VDOM = <h1>Hello React</h1> // 此处一定不要写引号 因为不是字符串

        // 渲染须弥 DOM 到页面
        ReactDOM.render(VDOM, document.getElementById("App"));
    </script>
</body>
```
