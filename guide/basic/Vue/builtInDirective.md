# 内置指令

## v-bind

- 单项绑定解析表达式
- **简写**：`:xxx`
- 数据只能从 data 流向页面

```vue
<template>
  <div>
    <input v-bind:value="value" />
    <!-- 简写 -->
    <input :value="value" />
  </div>
</template>
```

## v-model:value

- 双向数据绑定
- **简写**：`v-model`
- 数据不仅能从 data 流向页面，还可以从页面流向 data

```vue
<template>
  <div>
    <input v-model:value="value" />
    <!-- 简写 -->
    <input v-model="value" />
  </div>
</template>
```

## v-show

- 条件渲染
- 适用于切换频率较高的场景
- 不展示的 DOM 元素不会被移除，仅仅将 DOM 元素的盒子改为 `display:none`

```vue
<template>
  <div v-show="visible">
    自定义内容...
  </div>
</template>

<script>
export default {
    data(){
        return {
            visible: true
        }
    }
}
</script>
```

## v-if | v-else-if | v-else

- 条件渲染
- 适用于切换频率较低的场景
- 不展示的 DOM 元素会被移除
:::tip 注意
`v-if` 可以和 `v-else-if`、`v-else` 一起使用，但不能被打断

使用 `template` 可以打断
:::

```vue
<template>
  <div>
    <div v-if="condition === 0">第一个内容</div>
    <div v-else-if="condition === 1">第二个内容</div>
    <div v-else>第三个内容</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            condition: 0
        }
    }
}
</script>
```

## v-for

- 列表渲染
- 用于遍历列表数据

### key 的作用

1. 虚拟 DOM 中 key 的作用

    - key 是虚拟 DOM 对象的标识，当数据发生变化时，Vue 会根据 **新数据** 生成 **新的虚拟 DOM**

    - 随后 Vue 进行 **新虚拟 DOM** 与 **旧虚拟 DOM** 的差异对比

2. Vue 新旧 DOM 对比规则

   1. 旧虚拟 DOM 中找到了与新虚拟 DOM 相同的真实 DOM 真实的 key
        - 若虚拟 DOM 中内容没有更改，则直接使用之前的真实 DOM
        - 若虚拟 DOM 中的内容更改了，则生成新的 真实 DOM，随后替换掉页面中之前的真实 DOM

   2. 旧虚拟 DOM 中未找到与新虚拟 DOM 相同的key
        - 创建新的真实 DOM，随后渲染到页面上

3. 用 index 作为 key 可能会引发的问题
   
    - 若对数据进行：逆序添加、逆序删除等破坏顺序的操作，会产生没有必要的 DOM 更新（页面效果没问题，但是效率低）
    - 如果结构中包含输入类的 DOM，会产生错误的 DOM 更新（界面产生问题）

4. 开发中如何选择 key

    - 最好使用每条数据的唯一标识作为 key，例如：id、手机号码、身份证号码、学号等唯一值
    - 如果不存在数据的逆序添加，逆序删除等破坏顺序的操作，仅用于渲染列表进行展示，则使用 index 作为 key 也是没有问题的

```vue
<template>
  <div>
    <ul>
        <li v-for="(item, index) in list" :key="item.index">
          <div>名称：{{ item.label }}</div>
          <div>下标：{{ index }}</div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list: [
                { index: 0, label: "甜甜圈" },
                { index: 1, label: "香草蛋糕" },
                { index: 2, label: "榴莲千层" },
            ]
        }
    }
}
</script>
```

## v-on

- 事件监听
- **简写**：`@xxx`
- 用于对事件的监听

```vue
<template>
  <button v-on:click="onClick">按钮</button>
  <!-- 简写 -->
  <button @click="onClick">按钮</button>
</template>
```

## v-text

- 文本渲染
- 向其所在的节点中渲染文本内容
- 与插值语法的区别：`v-text` 会替换掉节点中的内容，而模板语法则不会

```vue
<template>
  <div v-text="'我是文本渲染的内容'">按钮</div>
</template>
```

## v-html

- 结构渲染
- 向指定的节点中渲染 html 结构内容
- `v-html` 不仅会替换掉节点中的内容，而且可以识别 html 结构

:::tip 安全性问题
在网站上动态渲染任意 html 结构是非常危险的，容易导致 XXS 攻击

一定要在可信的内容上使用 `v-html`，永远不要用在用户提交的内容上
:::

```vue
<template>
  <div>
    <div v-html="'<div>我是内容</div>'"></div>
  </div>
</template>
```

## v-cloak

- 遮盖器
- 本质是一个特殊属性，Vue 实例创建完毕并接管容易后，会删除 `v-cloak` 属性
- 使用 css 配合 `v-cloak` 可以解决网速慢时页面展示出 `{{ xxx }}` 的问题

```vue
<style>
[v-cloak]:{
    display: none
}
</style>
```

## v-once

- 一次性静态指令
- `v-once` 在初次动态选然后，就视为静态内容了
- 以后数据的改变不会引起 `v-once` 所在的结构更新，可用于优化性能

```vue
<template>
  <div>
    <div v-once>{{ title }}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: "donut"
        }
    }
}
</script>
```

## v-pre

- 跳过其所在的节点编译过程
- 可利用它跳过没有用指令语法、没有使用插值语法的节点，加快编译

```vue
<template>
  <div>
    <div v-pre>跳过此节点</div>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: "donut"
        }
    }
}
</script>
```