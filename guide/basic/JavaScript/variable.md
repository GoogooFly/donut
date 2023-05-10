# 变量

## 简介

变量是一块内存空间，用于保存数据

> 计算机：CPU、内存、硬盘、输入输出设备
> 
> 内存：存取速度快,数据易丢失
> 
> 硬盘：存取速度慢,数据永久保存
> 
> 计算机程序的运行,仅与内存打交道

## 步骤

1. 声明变量

变量声明后，它的值为 undefined

```js
var 变量名;
``` 

2. 给变量赋值

向变量的内存空间中存放数据

```js
var pid; // 声明了一个变量,名称为 pid,目前,变量为 undefined
pid = "xxx"; // 读法 将 xxx 存放到变量 pid 中
console.log(pid); // 输出变量 pid 的值( pid 中存放的数据)
console.log(typeof pid); // 输出变量 pid 的类型
```

## 变量值

变量可以被重新赋值,新的值会覆盖原来的值

```js
var a;
a = 1;
console.log(a,typeof a); // 此时a的值为1 类型为number
a = "abc";
console.log(a,typeof a); // 此时a的值为abc 类型为string
```

## 变量名称

在开发中，凡是需要自行命名的位置，叫做标识符

标识符的规范:

1. 只能以英文字母、下划线、$开头
2. 其他位置可以出现数字、英文字母、下划线、$
3. 不可以与关键字、保留词重复
4. 标识符应该做到望文知义
5. 如果有多个单词,使用驼峰命名法,单词首字母大写

> 大驼峰:每个单词首字母大写
>
> 小驼峰:除第一个单词外,首字母大写
> 
> 目前,使用的标识符都是小驼峰命名法

## 声明和赋值合并

变量的声明和赋值可以一条语句书写

```js
var a;
a = 1;
console.log(a);
//等效于
var a = 1;
console.log(a);
// 声明并完成赋值
```

## 多个变量合并声明并赋值

语法糖

```js
var a;
var b;
var c;
a = 1;
b = 2;
c = 3;
//等效于
var a,b,c;
a = 1;
b = 2;
c = 3;
//等效于
var a = 1,
    b = 2,
    c = 3;
```

## 不可使用未声明变量

```js
console.log(a); // a未声明 运行显示a is not defined
```

例外：使用 type 得到类型时，可以是未声明的变量，得到的结果是 undefined

```js
console.log(typeof a); // 显示undefined
```

## 变量提升

所有变量的声明会自动的提到代码的最顶部

但是，这种提升，不会超越脚本块

```js
console.(a,b);
var a = 1;
var b;
b = 3;
// 等效于
var a;
var b;
console.(a,b);
a = 1;
b = 3;
// 显示 undefined
```

## 定义多个同名变量

同名变量，提升后会变成一个

```js
var a = 1;
console.log(a);
var a = 2;
console.log(a);
// 等效于
var a;
a = 1;
console.log(a);
a = 2;
console.log(a);
```