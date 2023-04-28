# 计算属性

## 简介

- **定义**：计算属性就是当其依赖属性的值发生变化时，这个属性的值会自动变化，与之相关的DOM部分也会同步自动更新
- **原理**：底层借助了 `Object.defineProperty` 方法提供的 `getter` 和 `setter`
- **优势**：与 `methods` 实现相比，内部有缓存机制（复用），效率更高，调试更方便

## 简写

```vue

<script>
export default {
    computed:{
        fullname(){
            return
        }
    }
}
</script>

```

## 示例

```vue

<template>
  <div id="main">
    <div class="one">
      <p>{{ firstName }}</p>
      <p>{{ lastName }}</p>
    </div>

    <p>拼接后为: {{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "张三",
      lastName: "李四",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + "喜欢" + this.lastName;
      },
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>

```