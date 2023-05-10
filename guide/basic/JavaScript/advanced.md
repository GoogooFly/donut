# JS 进阶

## 原型和原型链

- 所有的对象都是通过```new 函数 ```创建

var object = {} === new object()

- 所有的函数也是对象

- 因此函数中可以有属性

- 所有对象都是引用类型
 
### 原型 prototype

所有函数都有一个属性:prototype ,称之为函数原型

默认情况下，prototype是一个普通的Object对象

```JS
prototype = {

};
```

默认情况下，prototype中有一个属性，constructor，它也是一个对象，它指向构造函数本身。

### 隐式原型 __proto__

所有的对象都有一个属性: ```__proto__```,称之为隐式原型。

默认情况下，隐式原型指向创建该对象的函数的原型

当访问一个对象的成员时: 

1. 看该对象自身是否拥有该成员，如果有直接使用

2. 在原型链中依次查找是否拥有该成员，如果有直接使用


猴子补丁: 在函数原型中加入成员，一增强对象的功能，猴子补丁会导致原型污染，使用时需谨慎。

### 原型链

特殊点:

1. Function的__proto__指向自身的prototype

2. Object的prototype的__proto__指向null

## 属性描述符

属性描述符: 它表达了一个属性的相关信息 (元数据)，它本质上是一个对象

1. 数据属性

```JS
var obj = {
    x:1// 数据属性
};

obj.y = 2; // 也叫数据属性
```
2. 存取器属性
 1. 当给它赋值，会自动运行一个函数
 2. 当获取它的值时，会自动运行一个函数
```JS
var obj ={};
object.definepeoperty(obj,"x",{
 // 属性描述符
 // value = 1 === obj.x =1
 value = 1// 如果写了get则value无效,它是数据属性不是存取属性
 get:function(){
     console.log("1");
 // 当读取属性x时，运行的函数，该函数的返回值，将作为属性的值
    return 2 ;
 },
 set: function(val){
     // 当给该属性赋值时，运行的函数
     // val: 表示要赋的值
     consol.log("1");
 }
});
obj.x = 3; //相当于运行了 set(3)
// 第一个属性，第二个属性的名称,第三个属性描述符，如果没有配置则是undefined
```

其他的属性描述符 

```JS
var obj ={};
// obj的name属性固定为ABC，而且不能被重新赋值
obj.defineproperty(obj,"name",{
    get:function(){
        return "abc";
    }
})

// 第二种

obj.defineproperty(obj,"name",{
    value:"abc",
    writable:false
})
```

```JS
var obj ={};
obj.defineproperty(obj,"name",{
    value:"abc",
    writable:false
    enumerable:false //不可迭代 遍历
})
```

**Object.getOwnproperDescriptor**

获取某个对象的某个属性的属性描述符对象 (该属性必须直接属于该对象)

```js
Object.getOwnproperDescriptor(obj,"name");
```

## 执行上下文

函数执行上下文: 一个函数运行之前，创建的一块内存空间，空间中包含有该函数执行所需要的数据，为该函数执行提供支持。

执行上下文栈: 叫 call stack，所有执行上下问组成的内存空间

栈: 一种数据结构，先进后出，后进先出。

全局执行上下文: 所有JS代码执行之前，都必须有该环境。

JS引擎始终执行的是栈顶的上下文。

### 执行上下文中的内容

1. this指向 
  
1). 直接调用函数，this指向全局对象

2). 在函数外，this指向全局对象

3). 通过对象调用或new一个函数，this指向调用的对象或新对象

2. vo 变量对象

variable object: VO 中记录了该环境中所有声明的参数，变量和函数

Global Object: GO，全局执行上下文中的VO

Active Object: AO，当前正在执行的上下文的AO

1). 确定所有的形参值以及特殊变量arguments

2). 确定函数中通过var声明的变量，将他们的值设置为undfined,如果vo中已有该名称,则直接忽略。

3). 确定函数中通过字面量声明的函数，将它们的值设置为指向函数对象，如果vo中已存在该名称，则覆盖 

当一个上下文中的代码执行的时候，如果上下文中不存在某个属性，则会从之前的上下文中寻找

## 作用域链

1. VO中包含一个额外的属性，该属性指向创建该VO的函数本身
2. 每个函数在创建，会有一个隐藏属性``` [[scope]]```,它指向创建该函数时的AO
3. 当访问一个变量时，会先查找自身VO中是否存在，如果不存在，则依次查找``` [[scope]]```属性。

某些浏览器会优化作用域链，函数的``` [[scope]]```中仅保留需要用到的数据。

## 事件循环

异步: 某些函数不会立即执行，需要等到某个时机成熟后才会执行，该函数叫做异步函数。

浏览器的线程:

1. js执行引擎: 负责执行js代码
2. 渲染线程: 负责渲染页面
3. 计时器线程: 负责计时
4. 事件监听线程: 负责监听事件
5. http网络线程: 负责网络通信

事件队列: 一块内存空间，用于存放执行时机到达的异步函数，当js引擎空闲(执行栈没有可执行的上下文)，他会从事件队列中拿出第一个函数执行。

事件循环: event loop , 是指函数在执行栈，宿主线程，事件队列中的循环移动