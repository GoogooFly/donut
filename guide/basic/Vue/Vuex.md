<script setup lang="ts">
import { NImage } from 'naive-ui';
</script>

# Vuex

## 简介

在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信

## 示意图

<NImage src="../../../assets/images/vuex.png" />

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

## 辅助函数

- State

```vue
<script>
import { mapState } from 'vuex';

export default {
    computed:{
        // 对象写法
        ...mapState({ getToken: "getToken" }),
        // 数组写法
        ...mapState(['getToken'])
    }   
}
</script>
```

- Getters

```vue
<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        // 对象写法
        ...mapGetters({ token: "token" }),
        // 数组写法
        ...mapGetters(['token'])
    }   
}
</script>
```

- Actions

```vue
<script>
import { mapActions } from 'vuex';

export default {
    computed:{
        // 对象写法
        ...mapActions({ setToken: "setToken" }),
        // 数组写法
        ...mapActions(['setToken'])
    }   
}
</script>
```

- Mutations

```vue
<script>
import { mapMutations } from 'vuex';

export default {
    computed:{
        // 对象写法
        ...mapMutations({ updateToken: "updateToken" }),
        // 数组写法
        ...mapMutations(['updateToken'])
    }   
}
</script>
```

:::tip 备注
mapActions 和 mapMutations 在使用时，若需要传递参数要在模板中绑定事件时传递好参数，否则参数是事件对象！
:::

## 模块化

- 优点：让代码更好维护，让数据分类更加明确

```js
import Vuex from 'vuex';

const userStore = {
    // 是否开启命名空间
    namespaced: true,
    state:{
        nickname: "GuGuFly"
    },
    actions: {},
    mutations:{},
    getters:{}
}

const appStore = {
    // 是否开启命名空间
    namespaced: true,
    state:{
        nickname: "Donut"
    },
    actions: {},
    mutations:{},
    getters:{}
}

const store = new Vuex.Store({
    modules: {
        appStore,
        userStore
    }
})
```

- 开启命名空间后

```js
// 读取 State

// 方式一
this.$store.state.userStore.nickname
// 方式二
...mapState('userStore', ['nickname'])

// 读取 Getters

// 方式一
this.$store.getters['userStore/getUserToken']
// 方式二
...mapGetters('userStore', ['getUserToken'])

// 读取 Actions

// token 为参数
// 方式一
this.$store.dispatch('userStore/setUserToken', token)
// 方式二
...mapActions('userStore', ['setUserToken'])

// 读取 Mutations

// role 为参数
// 方式一
this.$store.commit('userStore/setRole', role)
// 方式二
...mapMutations('userStore', ['setRole'])
```