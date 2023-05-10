# Date函数

## 术语

1. 时间单位

年 (year)
月 (mouth)
日 (date)
小时 (hour)
分钟 (minute)
秒 (second) = 1000ms
毫秒 (millisecond,ms) = 1000 us
微妙 (microsecond,us) = 1000 ns
纳秒 (nanosecond,ns)

2.  UTC和GMT

世界划分为24个时区,北京在东8区,格林威治在0时区

GMT: 格林威治世界时,太阳时,精确到毫秒
UTC:世界协调时,以原子时间为计时标准,精确到纳秒

UTC和GMT之间误差不超过0.9秒

GMT+0800 东8区  

## 创建时间对象

- 直接调用函数(不适用new),忽略所有参数,直接返回当前时间的字符串
- new Date(): 创建日期对象

1. 无参,当前时间

```js

console.log(Date());
// Tue Jul 06 2021 16:30:21 GMT+0800 (中国标准时间)

// 相当于

let d = new Date();

// d.toString();

console.log(d);

```

2. 1个参数,参数为数字,表示传入的是时间戳

```js

let d = new Date(1000); // Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

// 表示从1970年八点开始 过了一千毫秒

// 参数传入负数 结果就是时间往前
```

3. 两个参数及多个参数,分别表示年、月、日、时、分、秒、毫秒

```js

let d = new Date(2015,5,1,13,14,15,200); // Mon Jun 01 2015 13:14:15 GMT+0800 (中国标准时间)

console.log(d);

let d = new Date(2015,5); // Mon Jun 01 2015 00:00:00 GMT+0800 (中国标准时间)

// 如果缺失参数,日期部分默认为1,时分秒毫秒默认为0

let d = new Date(2015,-1); // Mon Dec 01 2014 00:00:00 GMT+0800 (中国标准时间)  2014年 12月 1日
let d = new Date(2015,2,-0); // Fri Feb 28 2015 00:00:00 GMT+0800 (中国标准时间)  2014年12月28日

// 月、日、时、分、秒、毫秒,均可以传递负数,如果传递负数,会根据指定日期进行计算
```

注意: 月份的数字从0开始计算 0表示1月

## 实例成员

- getDate 得到日期部分  
- getDay 得到星期几,0表示星期天
- getFullYear 得到年份
- getHours 得到小时部分
- getMinutes 得到分钟部分
- getSeconds 得到秒数部分
- getMilliseconds 得到毫秒部分
- getTime 得到时间戳
- getMonth 得到月

- setDate 设置日期
- setMonth 设置月
- setFullYear 设置年
- setMinutes 得到分钟部分
- setSeconds 得到秒数部分
- setMilliseconds 得到毫秒部分
- setTime 重新设置时间戳

- toDateString 将日期部分转换为可读的字符串
- toISOString 将整个对象转换为ISO标准的字符串格式
- toLocaleDateString 根据当前系统的地区设置 将日期部分转换为可读的字符串
- toLocaleString 根据当前系统的的地区设置 将整个日期转换为可读的字符串
- toLocaleTimeString 根据当前系统的地区设置 将时间部分转换为可读的字符串
- toUTCString 把一个日期对象转换为一个以UTC时区计时的字符串
- toString 返回一个表示日期对象的字符串
- toTimeString 只得到日期的转换  

## 日期的运算

日期对象重写了Object中的valueOf方法 返回的是一个数字 表示时间戳

因此,日期对象可以进行数学运算