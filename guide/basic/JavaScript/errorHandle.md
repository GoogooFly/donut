# 错误处理

1. 语法错误: 会导致整个脚本块无法执行
2. 运行错误
   1. 运行报错: 会导致当前脚本块后续代码无法执行
   2. 运行结果不符合预期

## 调试错误

1. 控制台打印
   
2. 断点调试 
   1. F12 Sources
   2. VSCode 插件Debugger for Chrome  左侧调试

## 抛出错误

错误在js中本质上是一个对象,抛出错误的语法为:

```js

throw 错误对象; 

```

- Error(); 错误对象的构造函数
- ReferenceError(); 创建一个error实例 表示错误的原因 表示引用错误
- SyntaxError(); 创建一个error实例 表示语法错误
- TypeError(); 类型错误  
- RangeError(); 创建一个error实例 表示错误的原因:数值变量或参数超出其有效范围

```js

let a = new Error("asdasd");

console.dir(a); // 检查错误对象

// dir

```

## 捕获错误

```js

try{
   // 代码块1
}

catch(错误对象){
   // 代码块2
}
finally{
   // 代码块3
}

```

当运行 代码1 的时候,如果发生错误 立即停止 代码1 的执行,转而执行 代码2 ,错误对象为抛出的错误对象,无论 代码1 和 代码2 是否执行 ,最终都将执行 代码3 

```js
function a(){
   b();
   console.log("a1");
}

function b(){
   try{
      c();
      console.log("b1");
   }
   catch(err){
      console.log("运行C的时候发生了问题",err);
   }
   finally{
      console.log("处理完成");
   }
}
function c(){
   throw new TypeError("asdasd");
   console.log("c1");
}
a();
console.log("g1");

```