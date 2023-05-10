# 事件处理 {#event}

## 点击事件

- 事件：`v-on:click="处理函数"`
- 简写：`@click="处理函数"`

### 操作修饰符（可连写）

|      事件    |                   作用                      |
| :---------: | :-----------------------------------------: |
| **prevent** | 初始化渲染或更新渲染调用                       |
| **stop**    | 开启监听，发送 AJAX 请求                      |
| **once**    | 事件只能触发一次                              |
| **captrue** | 事件的捕获模式                                |
| **self**    | 只有 `event.target` 是当前操作的元素时才会触发  |
| **passive** | 事件的默认事件立即执行，无需等待事件回调执行完毕   |

### 示例

```vue

<template>
  <!-- 点击事件 -->
  <button v-on:click="onClick">按钮</button>

  <!-- 简写模式 -->
  <button @click="onClick">按钮</button>

  <!-- 传参 -->
  <button @click="onClick(1)">按钮</button>

  <!-- 传参 + 获取元素属性 -->
  <button @click="onClick(1, $event)">按钮</button>

  <!-- 传参 + 获取元素属性 + 操作修饰符 -->
  <button @click.once="onClick(1, $event)">按钮</button>
</template>

```

## 键盘事件

- 事件：`v-on:keydown/keyup="处理函数"`
- 简写：`@keydown/keyup="处理函数"`

### 常用按键别名

|   按键   |              别名                |
| :------: | :-----------------------------: |
| **回车** | enter                           |
| **删除** | delete（捕获 “删除” 和 “退格” 键） |
| **退出** | esc                             |
| **空格** | space                           |
| **换行** | tab（必须配合`@keydown`使用）     |
| **上**   | up                             |
| **下**   | down                           |
| **左**   | left                           |
| **右**   | right                          |

### 自定义绑定按键

任何按键都有自己的按键编码和按键名称

```vue

<template>
  <!-- 未提供别名的按键，可以使用按键原始的 key 值去绑定 -->
  <!-- 注意：要转化为 kebab-case （短横线命名） -->
  <button @keyup.caps-lock="onKeyup">按钮</button>
</template>

```

### 系统修饰

- ctrl、alt、shift、meta
- 配合 `@keyup` 使用：按下修饰键的同时，再按下其它键，随后释放其它键，事件才被触发
- 配合 `@keyup` 使用：正常触发事件

```vue

<template>
  <!-- 当按下 ctrl + y 放开时 才触发 -->
  <button @keyup.ctrl.y="onClick">按钮</button>
</template>

```

### 使用 keyCode 自定义键名

```js
Vue.config.keyCodes.huiche = 13;
```

```vue

<template>
  <button @keyup.huiche="onClick">按钮</button>
</template>

```
