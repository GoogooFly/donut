# 过滤器

## 简介

- 对要显示的数据进行特定格式化后显示（一些简单的逻辑处理）
- 过滤器可以接受额外的参数、多个过滤器也可以串联
- 并没有改变原本的数据时产生新的对应的数据

```vue
<template>
  <div>
    <div>{{ title | setTitle }}</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title: "donut"
        }
    },
    filter:{
        setTitle(value){
            return `${value} plus`
        }
    }
}
</script>
```