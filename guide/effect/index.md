---
layout: doc
layoutClass: effect-layout
---
<script setup lang="ts">
import Links from './Links.vue';
import {
   commonState,
   vueState,
   reactState,
   javascriptState,
   cssState,
   miniState,
   nodeState,
   visualState,
   packageState,
   iconState,
   communityState,
   toolsState
} from './state';

</script>
<style src="./index.less"></style>

# 提效工具

:::details 
- 个人使用或遇到的类库
- 个人工作或学习时用到的软件
:::

## 常用工具

<Links :data="commonState" />

## 社区&学习

<Links :data="communityState" />

## Vue 生态

<Links :data="vueState" />

## React 生态

<Links :data="reactState" />

## JavaScript 框架类库&相关

<Links :data="javascriptState" />

## CSS 相关

<Links :data="cssState" />

## 小程序 相关

<Links :data="miniState" />

## Node 相关

<Links :data="nodeState" />

## 可视化

<Links :data="visualState" />

## 编译&构建&打包

<Links :data="packageState" />

## 图标库

<Links :data="iconState" />

## 必备软件

<Links :data="toolsState" />