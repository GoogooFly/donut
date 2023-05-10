# Math对象

提供了一系列与教学相关的成员

> 常量: 永远不会变化的数据,常量一般命名时所有字母大写,如果有多个单词,用下划线分割

- random 产生一个0~1的伪随机数
- PI属性 得到圆周率
- abs 求绝对值
- floor 对一个数向下取整

```js

console.log(Math.floor(-3.1)); // 输出结果为-4
// 向下取整 找到小于-3.1 的第一个整数

```

- ceil 对一个数向上取整

```js

console.log(Math.floor(3.1)); // 输出结果为 4 
// 向上取整 找到大于3.1 的第一个整数

```

- Math.max() 得到一组数字的最大值;如果无参,得到-Infinity

```js

// 可填写多个参数
console.log(Math.max()); // 输出结果为 -Infinity
// 如果无参则输出 -Infinity

```

- Math.min() 得到一组数字的最小值;如果无参,得到Inifinity

```js

// 可填写多个参数
console.log(Math.max()); // 输出结果为 Infinity
// 如果无参则输出 Infinity

```

- pow 求幂

```js

// 5的2次幂
console.log(Math.pow(5,2)); // 输出结果为 25
// 两个5相乘

//相当于

console.log(5**2);

```

- round 得到一个四舍五入的整数

```js

console.log(Math.round(3.5)); // 输出结果为4
// 四舍五入的整数

console.log(Math.round(-0.5)); // 输出结果为-0
// 如果参数为小数 且正好参数的小数部分为0.5  则按正无穷来计算
```