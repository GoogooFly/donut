# 数据代理 {#defineproperty}

## Object.defineProperty {#Object-defineProperty}

`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象

:::tip 注意
应当直接在`Object`构造器对象上调用此方法，而不是在任意一个`Object`类型的实例上调用。
:::

### 语法

```js
Object.defineProperty(obj, prop, descriptor)
```

### 参数

| 属性           | 注释                              |
| ------------- | :-------------------------------: |
| obj           |  要定义属性的对象。                 |
| prop          | 要定义或修改的属性的名称或 Symbol 。 |
| descriptor    | 要定义或修改的属性描述符。           |

### 返回值

返回传递给函数的对象

### 示例

```js
const obj = {};

Object.defineProperty(obj, 'prop', {
    // 当前值
    value: "anything",
    // 是否可重写 默认值：false
    writable: true,
    // 是否可以枚举 默认值：false
    enumerable: true,
    // 是否可再次修改配置项 默认值：false
    configurable: true,
    // 读取时内部调用的函数
    get:() => {
        return obj.prop;
    },
    // 写入时内部调用的函数
    set:(value) => {
        obj.prop = value;
    }
})

```

## Vue 中的数据代理

通过 vm 对象来代理 data 对象中属性的操作（读/写）

## Vue 中数据代理的好处

更加方便的操作 data 中的数据

## Vue 中数据代理的基本原理

- 通过 Object.defineProperty() 把 data 对象中所有属性添加到 vm 上
- 为每一个添加到 vm 上的属性，都指定一个 getter/setter
- 在 getter/setter 内部去操作（读/写）data 中对应的属性

## Vue 监视数据的原理

Vue 会监视 data 中所有层级的数据

### 如何监测对象中的数据

通过 `setter` 实现检测，且要在 new Vue 时就要传入需要监测的数据

对象中后追加的属性，Vue 默认不做响应式处理

如需给后追加的属性添加响应式，则需使用以下 API：

`Vue.set(target, key, value)` 或 `vm.$set(target, key, value)`

### 如何监测数组中的数据

通过包裹数组更新元素的方法实现，本质就是做了两件事：

1. 调用原生对应的方法对数组进行更新
2. 重新解析模板进而更新页面

### 在修改数组中的某一个元素时一定要使用以下方法

- `push()`、`pop()`、`shift()`、`unshift`、`splice()`、`sort()`、`reverse()`
- `Vue.set()` 或 `vm.$set()`

:::tip 注意
`Vue.set()` 和 `vm.$set()` 不能给 Vue 或 vm 的根数据对象添加属性
:::