# Vuex

## 简介

在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

## 使用步骤

1. 下载 Vuex

```bash
npm install vuex@next --save
```

2. 创建 `/src/store/index.js`

```js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 用于响应组件中的动作
const actions = {
    setToken(context, value){
        context.commit('updateToken', value);
    }
};

// 用于操作数据
const mutations = {
    updateToken(state, value){
        state.token = value;
    }
};

// 用于获取过滤后的数据
const getters = {
    getToken(state){
        return `token: ${state.token}`
    }
}

// 用于存储数据
const state = {
    token: undefined
};

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
```

3. `main.js` 中引入 store 配置项

```js
import Vue from 'vue'
import App from './App.vue'
// 载入store文件地址
import store from './store/index';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 传入store
  store,
}).$mount('#app')
```

4. 组件中使用

```vue
<template>
  <div>{{ $store.state.token }}</div>
</template>

<script>
export default {
    methods:{
        onActions(){
            this.$store.dispatch('setToken', 123465);
        },
        onMutations(){
            this.$store.commit('updateToken', 456789);
        },
        onGetters(){
            this.$store.getters.getToken;
        }
    }
}
</script>
```

## map 方法的使用

