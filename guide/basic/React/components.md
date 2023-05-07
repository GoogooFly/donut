# 组件

React 组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思

## 基本使用

### 类式组件

```jsx
import { Component } from 'react';

class Donut extends Component {
    render(){
        return <div>Hello React</div>
    }
}

export default Donut;
```

### 函数式组件

```jsx
function Donut() {
    return <div>Hello React</div>
}

export default Donut;
```

## state

state 是组件对象最重要的属性，值是一个可包含多个 key-value 组合的对象

组件被称为“状态机”，通过更新组件的 state 来更新对应页面的显示（重新渲染组件）

```jsx
import { Component } from 'react';

class Donut extends Component {
    state = {
        name: 'donut'
    }
    onUpdateState = () => {
        this.setData({
            name: 'DONUT'
        })
    }
    render(){
        return <div>Hello React</div>
    }
}

export default Donut;
```

:::danger 强烈注意
1. 类式组件 render 方法中的 this 指向组件的实例对象
2. 组件自定义方法中的 this 指向为 undefined 该如何解决？
   - 强制绑定 this 通过函数对象的 bind 方法
   - 箭头函数
3. 状态数据不能直接修改或更新，必须使用 setState 进行更改，其实现方式是合并，并不是替换
:::

## props

每个组件都会有 props 属性并且组件标签的所有属性都会保存在 props 中

通过标签属性从组件外向组件内传递变化的数据

:::tip 注意
组件内部不要修改 props 的数据
:::

父组件

```jsx
import { Component } from 'react';
import Donut from './components/Donut';

class Donut extends Component {
    state = {
        name: 'DONUT'
    }
    render(){
        return (
            <div>
                <Donut name="DONUT" />
                {/* 扩展语法 */}
                {/* 将 state 中的属性 转化为标签属性进行传递 */}
                <Donut {...state} />
            </div>
        )
    }
}

export default Donut;
```

子组件

```jsx
import { Component } from 'react';
import propTypes from 'prop-types';

class Donut extends Component {
    // 对标签属性进行类型、必要性的限制
    propTypes = {
        // 限制 类型为 string 必传
        title: propTypes.string.isRequired,
        // 限制 类型为 函数
        speak: propTypes.func,
    }

    // 指定标签的默认值
    defaultProps = {
        title: 'donut'
    }

    // 使用 props 内的数据
    onUseProps = () => {
        console.log(this.props.title);
    }

    render(){
        return <div>Hello React</div>
    }
}

export default Donut;
```

## refs

组件内的标签可以定义 ref 属性来标识自己

1. 字符串类型

```jsx
import { Component } from 'react';

class Donut extends Component {
    onGetRef = () => {
        console.log(this.refs.divEl);
    }
    render(){
        return <div ref="divEl">Hello React</div>
    }
}

export default Donut;
```

2. 回调类型

```jsx
import { Component } from 'react';

class Donut extends Component {
    onGetRef = () => {
        console.log(this.divEl);
    }
    render(){
        return <div ref={(el) => (this.divEl = el)}>Hello React</div>
    }
}

export default Donut;
```

3. 通过 createRef 创建 ref 容器

```jsx
import { Component, createRef } from 'react';

class Donut extends Component {
    divEl = createRef()
    onGetRef = () => {
        console.log(this.divEl);
    }
    render(){
        return <div ref={this.divEl}>Hello React</div>
    }
}

export default Donut;
```

## 组件间通信

工具库 `PubSubJS`

### 步骤

1. 安装 `PubSubJS`

```bash
npm install --save PubSubJS
```

2. 使用

发送消息的组件

```jsx
import { Component } from 'react';
import PubSub from 'pubsub-js'; // 引入

class Donut extends Component {
    // 发送消息
    onSendMsg = () => {
        PubSub.publish('自定义名称', data);
    }
    render(){
        return <div>Hello React</div>
    }
}

export default Donut;
```

接收消息的组件

```jsx
import { Component } from 'react';
import PubSub from 'pubsub-js'; // 引入

class GuGuFly extends Component {
    componentDidMount(){
        this.token = Pubsub.subscribe('自定义名称', function('接收的自定义名称',data){  })
    }
    componentWillUnmount(){
        Pubsub.unsubscribe(this.token); // 取消订阅
    }
    render(){
        return <div>Hello React</div>
    }
}

export default GuGuFly;
```