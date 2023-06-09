<script setup lang="ts">
import { NImage } from 'naive-ui';
</script>

# 生命周期

## 简介

- 又名生命周期回调函数、生命周期函数、生命周期钩子
- 生命周期内的 `this` 指向 vm 或 组件实例对象

## 常用的生命周期

- mounted：发送 ajax 请求、启动定时器、绑定自定义事件、订阅消息等初始化操作
- beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等收尾操作

## 关于销毁 Vue 实例

- 销毁后借助 Vue 开发者工具看不到任何信息
- 销毁后自定义事件会失效，但原生 DOM 事件依然有效
- 一般不会再用 beforeDestroy，因为即使操作数据，也不会再触发更新流程了

<NImage src="./../../../assets/images/vue-lifecycle.png" />