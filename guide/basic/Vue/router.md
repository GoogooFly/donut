# 路由

## 简介

vue-router 是基于路由和组件的

- 路由是由用户设定访问路径，将路径和组件映射起来
- 在 vue-router 的单页面应用中，页面路径的改变就是组件的切换

## 使用步骤

1. 下载 vue-router

```bash
npm install vue-router --save
```

2. 创建 `/src/router/index.js`

```js
// 引入 vue-router
import Router from 'vue-router';

// 引入组件
import Home from '../views/Home/index.vue';
import Person from '../views/Person/index.vue';

const route = new Router({
    routes: [
        { name: "Home", path: "/home", component: Home },
        // 此处可省略 /
        { name: "Person", path: "/person", component: Person },
    ]
})
```

3. 模板中使用

```vue
<template>
  <div>
    <!-- 用于切换路由 使用路径跳转 -->
    <router-link to="/person">跳转</router-link>
    <!-- 用于切换路由 使用路由名称跳转 -->
    <router-link :to="{ name: 'Person' }">跳转</router-link>

    <!-- 用于展示路由组件 -->
    <router-view>跳转</router-view>
  </div>
</template>

<script>
export default {

}
</script>
```

## 路由传参

1. query 传参

```vue
<template>
  <div>
    <!-- 字符串写法 -->
    <router-link to="/person?nickname=donut">跳转</router-link>
    <!-- 对象写法 -->
    <router-link :to="{ path: '/person', query: { nickname: 'donut' } }">
    跳转
    </router-link>
  </div>
</template>

<script>
export default {
    mounted(){
        // 获取参数
        this.$route.query.nickname
    }
}
</script>
```

2. params 传参

```js
const route = new Router({
    routes: [
        { name: "Home", path: "/home", component: Home },
        // 使用占位符声明接收params
        { name: "Person", path: "/person/:nickname", component: Person },
    ]
})
```

```vue
<template>
  <div>
    <!-- 使用占位符 -->
    <router-link to="/person/donut">跳转</router-link>
    <!-- 对象写法 -->
    <router-link :to="{ path: '/person', params: { nickname: 'donut' } }">
    跳转
    </router-link>
  </div>
</template>

<script>
export default {
    mounted(){
        // 获取参数
        this.$route.params.nickname
    }
}
</script>
```

## props

让路由组件更加方便的收到参数

```js
const route = new Router({
    routes: [
        { name: "Home", path: "/home", component: Home },
        // 使用占位符声明接收params
        { 
            name: "Person", 
            path: "/person/:nickname", 
            component: Person,
            // 写法一 该对象的 key-value 组合 最终都会通过 props 传给路由组件
            props:{
                nickname: 'donut'
            },
            // 写法二 如果为 true 则把收到的所有 params 参数 通过 props 传给路由组件
            props: true, 
            // 写法三 函数式 作用同写法一
            props(route){
                return {
                    nickname: route.query.nickname
                }
            }
        },
    ]
})
```

## replace

用于控制路由跳转时操作浏览器的历史记录

```vue
<template>
  <div>
    <!-- 追加历史记录 默认 -->
    <router-link push></router-link>
    <!-- 替换当前历史记录 -->
    <router-link replace></router-link>
  </div>
</template>
```

## 编程式路由导航

```vue
<script>
export default {
    mounted(){
        this.$router.push({
            name: "Home",
            params: {
                nickname: "donut"
            }
        })

        this.$router.replace({
            name: "Home",
            query: {
                nickname: "donut"
            }
        })

        this.$router.forward(); // 前进
        this.$router.back(); // 后退
        this.$router.go(num); // 前进或后退几步 num<number>
    }
}
</script>
```

## 路由缓存

让不展示的路由保持挂在，不被销毁

```vue
<template>
  <div>
    <!-- 默认缓存所有组件 -->
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

    <!-- 缓存单个组件 -->
    <keep-alive include="Person">
        <router-view></router-view>
    </keep-alive>

    <!-- 缓存多个组件 -->
    <keep-alive :include="['Home', 'Person']">
        <router-view></router-view>
    </keep-alive>
  </div>
</template>
```

## 两个新生命周期钩子

路由组件独有的两个生命周期钩子，用于捕获路由组件的激活状态

- `activated` 路由组件被激活
- `deactivated` 路由组件失活


## 路由守卫

用于对路由进行权限控制

### 全局守卫

每次路由跳转都会触发

```js
// 前置路由守卫
// to 前往的路由信息
// from 原路由信息
router.beforeEach((to, from, next) => {
    next(); // 放行
})

// 后置路由守卫
router.afterEach((to, from) => {

})
```

### 独享守卫

只作用于专属的路由组件

```js
const route = new Router({
    routes: [
        { name: "Home", path: "/home", component: Home },
        // 使用占位符声明接收params
        { 
            name: "Person", 
            path: "/person", 
            component: Person,
            beforeEnter(to, from, next){
                next();
            }
        },
    ]
})
```

### 组件守卫

```vue
<script>
export default {
    // 进入守卫，通过路由规则，进入该组件时被调用
    beforeRouteEnter (to,from,next) {},
    // 离开守卫，通过路由规则，离开该组件时被调用
    beforeRouteLeave (to,from,next) {}
}
</script>
```

## history 与 hash

- 对于一个url来说，什么是hash值？--#及其后面的内容就是hash值
- hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器
- hash模式：
    1. 地址中永远带着#号，不美观
    2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法
    3. 兼容性较好
- history模式：
    1. 地址干净，美观
    2. 兼容性和hash模式相比略差
    3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题

```js
const route = new Router({
    routes: [
         mode:'history', // hisroty模式
        { name: "Home", path: "/home", component: Home },
        { name: "Person", path: "/person", component: Person }
    ]
})
```