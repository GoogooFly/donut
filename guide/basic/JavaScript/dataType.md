# 数据类型

## 基本类型

原始类型指不可再细分的类型

### 数字类型 number

直接书写即可

```js
var num = 123;
```

:::details 了解
数字类型可以加上前缀,来表示不同的进制

0:表示8进制

0x:表示16进制

0b:表示2进制
:::

### 字符串类型 string

- 单引号''
- 双引号""
- 飘 ` 模板字符串

```js
var str = '字符串';
var str = "字符串";
var str = `字符串`;
```

:::tip 在字符串中表示一个特殊字符
可以使用转义符( \ )  

`\\` 转义斜杠

`\n` 表示换行符

`\t` 表示制表符 相当于键盘的tab键
:::

### 布尔类型 boolean

布尔类型用于表达真或假两种状态

```js
var is = false;
var is = true;
```

### undefined类型

表示未定义,不存在

```js
var name = undefined;
```

### null类型

表示空,不存在.

```js
var data = null;
```

## 引用类型

### 对象 Object

由多个基本类型或引用类型组合而成

```js
var obj = {
    name: "Donut",
    action: {
        say: "Hello JavaScript",
        eat: "hamburger"
    }
}

// 访问 对象中的某一项
console.log(obj['name']);
// 或者
console.log(obj.name);
```

## ES6 新增类型

### Symbol 

创建后独一无二且不可变的数据，它的出现是为了解决可能出现的全局变量冲突的问题

```js
var value = Symbol("标识性数值");
```

### BigInt

数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全的存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围

```js
var value = BigInt(10.32);
```