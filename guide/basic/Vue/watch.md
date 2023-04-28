# 监视属性

## 简介

- Vue 中的 watch 默认不检测对象内部值得改变（一层）
- 配置 `deep：true` 可以监测内部值得改变（多层）
- Vue 自身可以监测对象内部值得改变，但是 Vue 提供的 watch 默认不可以
- 使用 watch 时根据数据的具体结构，决定是否采用深度监视

## 示例

```vue

<script>
export default {
  watch:{
    isHot: {
        // 初始化时，让 handler 调用一下
        immediate: true, 
        // 深度监视
        deep: true, 
        handler(newValue, oldValue){
            console.log("isHot 被修改了");
            console.log("这是旧值：" + oldValue);
            console.log("这是新值：" + newValue);
        }
    },

    // 简写
    isHot(newValue, oldValue){
        console.log("isHot 被修改了");
        console.log("这是旧值：" + oldValue);
        console.log("这是新值：" + newValue);
    }
  }
}
</script>

```

```js

// 通过 vm.$watch 监视

vm.$watch('isHot', {
    immediate: true,
    deep: true,
    handler(newValue, oldValue){
        console.log("isHot 被修改了");
        console.log("这是旧值：" + oldValue);
        console.log("这是新值：" + newValue);  
    }
})

// 简写，简写不能配置其他属性，比如immediate,deep
vm.$watch('isHot',function(newValue,oldValue) {
    console.log('isHot被修改了', newValue, oldValue)
})

```

## watch 与 computed 的区别

- computed 额能完成的功能，watch 都可以完成
- watch 能完成的功能，computed 不一定能完成，例如：watch 可以进行异步倒错

:::tip 注意

- 所被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或 组件实例对象
- 所有不被 Vue 所管理的函数（定时器的回调函数、ajax 的回调函数、Promise 的回调函数等），最好写成箭头函数，这样 this 的指向才是 vm 或 组件实例对象

:::