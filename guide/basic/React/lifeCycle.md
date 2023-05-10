# 生命周期

组件从创建到死亡它会经历一些特定的阶段

React 组件中包含一系列钩子函数（生命周期回调函数）会在特定的时刻调用

我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作

## 旧生命周期

<n-image src="../../../assets/react/oldPLC.jpg" />

- 初始化阶段 `ReactDOM.render()`

    `contructor()`

    `getDerivedStateFromProps()`

    `render()`

    `componentDidMount()`

- 更新阶段 `this.setState` || 父组件 重新 render 触发

    `getDeriveStateFromProps()`

    `shouldComponentUpdate()`

    `render()`

    `getSnapshotBeforeUpdate()`

    `componentDidUpdate(prevProps, prevState, snapshotValue)`

- 卸载阶段 `ReactDOM.unmountCompoentAtNode()`

    `componentWillUnmount()`


## 新生命周期

<n-image src="../../../assets/react/newPLC.jpg" />

- 初始化阶段 `ReactDOM.render()`

    `contructor()`

    `getDerivedStateFromProps()`

    `render()`

    `componentDidMount()`

- 更新阶段 `this.setState()` || 父组件 重新 render 触发

    `getDeriveStateFromProps()`

    `shouldComponentUpdate()`

    `render()`

    `getSnapshotBeforeUpdate()`

    `componentDidUpdate(prevProps, prevState, snapshotValue)`

- 卸载组件 `ReactDOM.unmountCompoentAtNode()`

    `componentWillUnmount()`

## 重要的钩子

|         名称         |            作用            |
| :------------------: | :-----------------------: |
| render               | 初始化渲染或更新渲染调用      |
| componentDidMount    | 开启监听，发送 AJAX 请求     |
| componentWillUnmount | 做一些收尾工作，如：清理定时器 |

## 即将废弃的钩子

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

:::warning 注意
现在使用会出现警告，下一个大版本需要加上 `UNSAFE_` 前缀才能使用，以后可能会被彻底废弃，不建议使用
:::