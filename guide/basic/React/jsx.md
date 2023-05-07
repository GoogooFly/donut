# JSX 语法规则

1. 定义虚拟 DOM 时，不要写引号

```jsx
const VDOM = <div>虚拟 DOM</div>
```

2. 标签中混入 JavaScript 表达式时，要用 {}

```jsx
const nickname = "donut";
const VDOM = <div>{ nickname }</div>
```

3. 样式的类名指定不要使用 class，应用 className

```jsx
const VDOM = <div className="title">虚拟 DOM</div>
```

4. 内联样式写法 对象内使用小驼峰 key-value

```jsx
const VDOM = <div style={{ backgroundColor: 'red' }}>虚拟 DOM</div>
```

5. 虚拟 DOM 必须只有一个根标签

6. 虚拟 DOM 标签必须闭合

```jsx
const VDOM = <img src="" />
```

7. 标签首字母
    - 若小写字母开头，则将该标签转为 HTML 中同名元素，若 HTML 中无同名元素，则报错
    - 若大写字母开头，React 就去渲染对应的组件，若组件没有定义，则报错
