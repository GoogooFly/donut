# 事件处理

通过 `onXxx` 属性来指定事件处理函数（注意区分大小写）

:::tip 注意
1. React 使用的是自定义（合成）事件，而不是使用原生事件
2. React 中的事件是通过事件委托的方式处理的（委托给组件最外层的的元素）
:::

```jsx
import { Component } from 'react';

class Donut extends Component {
    onUpdate = () => {
        console.log('我点击了');
    }
    render(){
        return <button onClick={this.onUpdate}>按钮</button>
    }
}
```