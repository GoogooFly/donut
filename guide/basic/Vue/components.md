# 组件

## 简介

组件（Component）是 Vue 最强大的功能之一

组件可以扩展 HTML 元素，封装可复用的代码

组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树

<n-image src="./../../../assets/vue/component.jpg" />

- 假设这是一个按钮组件
```vue
<template>
  <button>我是组件按钮</button>
</template>
```

## 注册局部组件

- 引入组件
```vue
<template>
  <div>
    <Button />
  </div>
</template>

<script>
import Button from '组件的路径';
export default {
    components:{
        Button
    }
}
</script>
```

## 全局引入组件

```js
import Button from '组件的路径';
Vue.component('Button', Button);
```

:::tip 注意
data 必须写成函数，避免组件被复用时，数据存在引用关系

组件命名必须为驼峰或kebab-case写法且模板中必须有结束标签
:::

## ref 属性

- 用来给元素或子组件注册引用信息（id 的代替者）
- 应用在 html 标签上获取的是真实的 DOM 元素，应用在组件标签上是组件实例对象

```vue
<template>
  <div>
    <input ref="inputEl" />
  </div>
</template>

<script>
export default {
    mounted(){
      console.log(this.$refs.inputEl);
    }
}
</script>
```

## props 配置

- 接收组件外传来的参数

```vue
<template>
  <div>
    <Button text="按钮" />
  </div>
</template>

<script>
import Button from '组件的路径';
export default {
    components:{
        Button
    }
}
</script>
```

```vue
<template>
  <div>
    <button>{{ text }}</button>
  </div>
</template>

<script>
export default {
    // 只接收
    props:['text'],
    // 接收且限制类型
    props: {
        text: String
    },
    // 接收、限制类型、限制必要性、设置默认值
    props: {
        text: {
            type: String,
            required: true,
            default: "组件"
        }
    }
}
</script>
```

:::tip 注意
props 是只读的，Vue 底层会监视你对 props 的修改，如果进行了修改，就会发出警告，若业务需求，那么请复制一份 props 的内容到 data 中，然后修改data中的数据，达到其目的。
:::

## mixin 混入

- 把多个组件公用的配置提取成一个混入对象

```js
export const mixin = {
    methods:{
        onSay(){
            console.log('我是一个 mixin 方法');
        }
    }
}
```

```vue
<template>
  <div>
    <button @click="onSay">按钮</button>
  </div>
</template>

<script>
import { mixin } from 'mixin 路径';
export default {
    data(){
        return {

        }
    },
    mixins:[mixin]
}
</script>
```

### 全局混入

```js
Vue.mixin(xxx);
```

## scoped 

- 防止样式冲突

```vue
<style scoped></style>
```

## 自定义组件事件

- 组件间的通信方式

- 父组件
```vue
<template>
  <div>
    <Button @donut="onDonut" />
  </div>
</template>

<script>
import Button from '子组件 路径';
export default {
    components:{
        Button
    },
    methods:{
        onDonut(value){
            console.log(value);
        }
    }
}
</script>
```

- 子组件
```vue
<template>
  <div>
    <button @click="onClick">按钮</button>
  </div>
</template>

<script>
export default {
    methods:{
        onClick(){
            this.$emit("donut", "我是参数");
            // 解除自定义事件
            // this.$off("donut");
        }
    }
}
</script>
```

## $nextTick

- 在下一次 DOM 更新结束后执行其指定的回调

```vue
<script>
export default {
    methods:{
        onClick(){
            this.$nextTick(() => {
                console.log("已经执行");
            })
        }
    }
}
</script>
```

## 过渡与动画

- 在合适的时候给元素加上样式类名

<n-image src="./../../../assets/vue/transition.png" />

### 样式

- 进入

v-enter: 进入的起点

v-enter-active：进入的过程中

v-enter-to：进入的终点

- 离开

v-leave：离开的起点

v-leave-active：离开的过程中

v-leave-to：离开的终点

- 使用 `<transition></transition>` 包裹住要过渡的元素并配置 `name` 属性

```vue
<template>
  <div>
    <transition name="donut">
        <div v-show="visible">过渡属性</div>
    </transition>
  </div>
</template>
```

:::tip 注意
若有多个元素要过渡，则需要使用 `<transition-group></transition-group>`，且给每个元素都要指定 key 值
:::

## 插槽

- 让父组件可以向子组件指定的位置插入 html 结构

### 默认插槽

```vue
<!-- 父组件 -->
<template>
    <div>
      <Button>插槽内容</Button>
    </div> 
</template>

<!-- 子组件 -->
<template>
    <div>
      <slot />
    </div> 
</template>
```

### 具名插槽

```vue
<!-- 父组件 -->
<template>
    <div>
      <Button>
        <template v-slot:content>
            插槽内容
        </template>
      </Button>
    </div> 
</template>

<!-- 子组件 -->
<template>
    <div>
      <slot name="content" />
    </div> 
</template>
```

### 作用域插槽

- 数据在子组件中，是否使用由父组件决定

```vue
<!-- 父组件 -->
<template>
    <div>
      <Button>
        <template slot-scope="scope">
            {{ scope.data }}
        </template>
      </Button>
    </div> 
</template>

<!-- 子组件 -->
<template>
    <div>
      <slot :data="data" />
    </div> 
</template>
```