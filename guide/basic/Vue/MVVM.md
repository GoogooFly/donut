# MVVM {#MVVM}

<n-image src="./../../../assets/images/vue-MVVM.jpg" />

## 如何理解 MVVM {#understand-MVVM}

MVVM 是 Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式

- **M**：模型（Model） 对应 data 中的数据
- **V**：视图（View） 用户的界面，也就是 DOM
- **VM**：视图模型（ViewModel） Vue 实例对象，连接 View 和 Model 的桥梁

MVVM 的核心是提供对 View 和 ViewModel 的双向数据绑定，当数据变化时，ViewModel 能监听到数据的变化（通过 Data Bindings），自动更新视图，而当用户操作视图，ViewModel 也能监听到视图的变化（DOM Listeners），然后通知数据做改动，这就实现了数据的双向绑定。

## MVVM 与 MVC 有什么区别 {#difference-MVC-MVVM}

<n-image src="./../../../assets/images/vue-MVC.jpg" />

1. MVC 是 Model-View-Contoller 的简写，即模型-视图-控制器

2. MVC 的目的是将 Model 和 View 的代码分离

3. MVC 是单向通信，也就是 View 和 Model 必须通过 Controller 来承上启下

4. MVVM 实现了 View 和 Model 的自动同步，当 Model 的属性改变时，不再需要自己手动操作 DOM，提高了页面渲染性能