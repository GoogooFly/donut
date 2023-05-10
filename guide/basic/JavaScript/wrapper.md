# 原始类型包装器

- new 包装器(值):返回的是一个对象
- 包装器(值):返回得是一个原始类型

## Number

### 静态成员

- Number.isNaN() 判断传递得值是否是NaN

```js

console.log(Number.isNaN(NaN)); // true
// 判断传递得值是否是NaN

```
- Number.isFinite() 判断传递得值类型及本身是否有限数

```js

console.log(Number.isFinite(1)); // true
// 判断传递得值得类型及本身是否有限数

```
- Number.isInteger() 判断传递得值类型是"number" 且是整数  integer 中文整数得意思

```js

// 判断传递得值是"number" 且是整数
console.log(Number.isInteger(3));
// 传递得值 是number 且是整数 显示true


console.log(Number.isInteger(3.14));
// 传递得值 是number 但是 不是整数 则显示 false

console.log(Number.isInteger(3.00));
// 传递得值 是number 且是整数 显示true
// 传递得值不会区分小数和整数
// 只要值是整数就判断整数

console.log(Number.isInteger("asd"));
// 传递得值 不是number 则显示false

```

- Number.parseFloat() 将一个数据转换为小数

```js

console.log(Number.parseFloat(3)); 
// 输出结果 3
// js不会区分整数小数  转换整数结果为3.000
// 但  3.000  === 3
// 所以结果不变


// parseInt、parseFloat 要求参数是一个字符串,如果不是字符串,则会先转换为字符串
// 从字符串开始位置进行查找,找到第一个有效的数字进行转换,如果没有找到,则返回NaN,左右空白字符会忽略
```
- Number.parseInt() 将一个数据转换为整数,直接舍去小数部分

parseInt,可以传入第二个参数,表示将给定的字符串,识别为多少进制

```js

console.log(Number.parseInt(3.6));  // 不会四舍五入
// 输出结果 3
// 直接舍去小数部分

// parseInt、parseFloat 要求参数是一个字符串,如果不是字符串,则会先转换为字符串
// 从字符串开始位置进行查找,找到第一个有效的数字进行转换,如果没有找到,则返回NaN,左右空白字符会忽略

function ranSum(max,min){
  return Math.random() * (max - min) + min; // 得到的值是小数
  // parseInt(Math.random() * (max - min) + min);  正数公式   转换为整数
  // Math.floor(Math.random() * (max +1 - min) + min);  负数公式  Math.fool 向下取整
  // 返回最小值到最大值之间的随机数
}

```

### 实例成员

- toFixed() 保留小数点后几位 会自动运算四舍五入

```js

let num = 3.14159;

console.log(num.toFixed(3)); // 3.142 会自动运算四舍五入

```

- toPrecision() 以指定的精度返回一个数字字符串

```js

let num = 1234.1234; // 此时数字的精度为8

console.log(num.toPrecision(5)); // 设置数字的精度为5 输出为1234.5

```

## Boolean

### 静态成员

- fromCharCode 通过unicode编码 

```js

let blank = ""; // 声明一个空字符串 用于连接

for(i=65;i <65 + 26; i ++){ // 循环查找码表65 到 65+26之间的字符串
    blank += String.fromCharCode(i);
    // 通过空字符串 连接码表查询出来的字符串
}
console.log(blank); 

```

- fromCharCodePoint()  同上码表  区别 后者会进行有效性检查 前者则不会(实验性)

```js

let num = String.fromCharCode(Infinity);

console.log(num);  // 输出获得 " "

let nums = String.fromCharCodePoint(Infinity);

console.log(nums); // 输出报错
```

### 实例成员

- length 字符串长度 

字符串是一个伪数组

```js

let str = "asd"; // 字符串是一个伪数组

for (i = 0; i < str.length;i++){ // 有下标即可使用
    console.log(str[i]); // 输出结果为 a
                         //            s
                         //            d
}

```

- charAt 得到指定位置的字符

```js

let str = "asd";

console.log(str.charAt(2));
// 相当与 console.log(str[2]);

// 区别

console.log(str.charAt(3)); // 超出下标会显示空字符串
// console.log(str[3]); 超出下标会显示 undefined 
```

- charCodeAt 得到某个下标的元素的字符编码 

```js

let str = "asd";

console.log(str.charCodeAt(2));  // 获得下标2上的元素的字符编码

// 输出结果为100

// 如果下标超出 则显示NaN

```

- concat 连接两个字符串文本,并返回一个新的字符串

```js

let str = "锐雯";

console.log(str.concat("放逐之刃","黎明使者")); // 连接两个字符串文本 并返回一个新的字符串

// 输出结果为 "锐雯放逐之刃黎明使者"

```

- includes 判断一个字符串里是否包含其他字符串

```js

let str = "abc";

console.log(str.includes("a")); // 输出结果为true
// 判断str里面是否有 a 这个字符串

console.log(str.includes("d")); // 输出结果为false
// 因为里面没有 d 字符串

```

- endsWith 判断一个字符串的结尾是否包含其他字符串中的字符串

```js

let str = "放逐之刃";
console.log(str.endsWith("刃")); // 输出结果为true
// 判断 str 是否以 刃结尾

console.log(str.endWith("放逐")); // 输出结果为false
// str 的结尾不是以 放逐 结尾 所以为false

console.log(str.endWith(" ")); // 输出结果为 true
// 空字符串的输出结果永远为true

```

- indexOf 从字符串对象中返回的首个被发现的给定的值的索引值,如果没有找到则返回 -1

```js

let str = "abc锐雯";

console.log(str.indexOf("锐雯")); // 找到第一个被发现的值的下标 输出结果为3

console.log(str.indexOf("放逐之刃")); // 如果未找到 则显示 -1

```

- lastIndexOf 最后一个发现的值 同上

- padStart 在当前字符串头部填充指定的字符串,直到达到指定的长度,然会一个新的字符串

```js

let hour = 2,
    minute = 8,
    second = 20;

    console.log(`${hour.toString().padStart(2,"0")}`);
    // 给number类型的数字 转化为 字符串类型
    // padStart 有两种参数 
    // 第一个是 需要达到的字符串长度
    // 第二个是 达不到字符串所需要的长度时添加的内容
    // 如果添加的内容不一样 则循环内容直至达到所需字符串长度

```

- padEnd 在末尾填充 同上

- repeat 返回指定重复次数的由元素组成的字符串对象

```js

let str = "abc";

console.log(str.repeat(3)); // 输出结果为 "abcabcabc"
// repeat的参数为 需要重复的次数

```

- slice 摘取一个字符串区域,返回一个新的字符串,位置可以是负数

```js

let str = "abcd";

console.log(str.slice(1)); // 输出结果为"bcd"
// 从下标为1的字符串开始 向后摘取所有字符串 并返回一个新的字符串

console.log(str.slice(1,3)); // 输出结果为 "bc"
// 从下标为1的字符串开始 向后摘取到下标为3的字符串(不包括下标为3的字符串) 并返回一个新的字符串

```

- substr 从某个位置开始取,取指定的长度,位置可以是负数

```js

let str = "abcd";

console.log(str.substr(1,3)); // 输出结果为 "bcd"
// 第一项参数为 从下标为1的字符串开始截取
// 第二项参数为 截取几个字符串

```

- substring 从某个位置取到某个位置,不可以负数,参数位置是可以调换的

```js

let str = "abcd";
console.log(str.slice(1,3)); // 输出结果为"bc"
console.log(str.slice(3,1)); // 输出结果为""
// slice 参数位置不可被调换

console.log(str.substring(1,3)); // 输出结果为"bc"
console.log(str.substring(3,1)); // 输出结果为"bc"
// 当参数条件不满足时会自动调换参数
```

- toLowerCase 将字符串转换为小写

```js

let str = "ABCD";

console.log(str.toLowerCase()); // 输出结果为"abcd"
// 将字符串转换为小写

```

- toUpperCase 将字符串转换为大写

```js

let str = "abcd";

console.log(str.toUpperCase()); // 输出结果为"ABCD"
// 将字符串转换为大写

```

- trim 从字符串的开始和结尾去除空格

```js

let str = "   abc   ";

console.log(str.trim()); // 输出结果为"abc"
// 将字符串的前后空格去除

```

- trimStart  去除左边的空格

- trimEnd 去除字符串右边的空格

- split 分割字符串

```js

let str = "a,b,c,d";

console.log(str.split(",")); // 输出结果为 数组abcd
// 将选中的参数去除进行分割为数组

```

- 作业

```js
// 1. 找到某个字符串中出现最多的字符,打印字符和它出现的次数

var records = {} ; // 记录出现频率
for (var i = 0; i <arr.length;i++){
    var n = arr[i];
    if(records[i]){
        records[n]++;
    }else{
        records[n] = 1;
    }
}

var result; // 记录最终结果的对象
for (var prop in records){
    if(!result || records[prop] > result.frequency){
        result = {
            number: +prop;
            frequency: records[prop]
        }
    }
}


```