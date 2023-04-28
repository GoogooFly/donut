# 自定义指令

见名知意，言简意骇

## 函数式

```vue
<template>
  <div>
    <div v-customDirectives="20"></div>
  </div>
</template>

<script>
export default {
    directives:{
        // element 自定义指令所处的 DOM 节点
        // binding 自定义指令所接收的参数
        customDirectives(element, binding){
            element.innerText = binding.value * 20;
        }
    }
}
</script>
```

## 对象式

```vue
<template>
  <div>
    <div v-customDirectives="20"></div>
  </div>
</template>

<script>
export default {
    directives:{
        customDirectives:{
            // 指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
               
            },
            // 指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        }
    }
}
</script>
```

## 全局指令

```js
Vue.directive('fbind', {
    // 指令与元素成功绑定时（一上来）
    bind(element, binding) {
        element.value = binding.value
    },
    // 指令所在元素被插入页面时
    inserted(element, binding) {
        element.focus()
    },
    // 指令所在的模板被重新解析时
    update(element, binding) {
        element.value = binding.value
    }
})
```

:::tip
1. 定义指令时，不需要加 `v-`，但使用时需要

2. 定义指令时，如果指令名称是多个单词，需要使用 kebab-case 命名方式，不要使用驼峰命名
:::