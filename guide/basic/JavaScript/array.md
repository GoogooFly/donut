# Array构造器

```js
let aa = new Array();

aa.abc() //实例方法   // 通过对象来调用的

Array.abc(); //静态方法
```

凡是通过Array构造函数创建的对象,都是数组

## 静态成员

- from方法: 可以将一个伪数组转换为真数组

```js
function test(){
    console.log(arguments) // 控制台输出为假数组
    let newArr = Array.from(arguments) // 声明一个变量
    // 使用静态方法 Array.from();  使arguments 假数组 转换为真数组
}
test(1,2,3,4,5,6); // 调用test函数
```

- isArray方法: 判断给一个给定的数据,是否为一个真数组

```js
function test(){
    console.log(arguments); // 控制台输出为假数组
    console.log(Array.isArray(argumenst)); // 使用Array.isArray(); 静态方法 判断 arguments 是否为 假数组
    // 如果arguments 为真数组 则显示 true 如果为假数组 则显示 false

    let newArr = Array.from(arguments); // 转换 arguments 变为 真数组
    console.log(Array.isArray(newArr)); // 输出判断 转换后的arguments 是否为真数组
}
test(1,2,3,4);
```
console.log(newArr);

- of方法: 类似于中括号创建数组,依次赋予数组每一项的值 

```js
let newArr = Array.of(1,2,3); // 静态方法 Array.of(); 
console.log(newArr);
// 相当于
let newArr = [1,2,3];
console.log(newArr);
// 相当于
let newArr = new Array(1,2,3);
console.log(newArr);
console.log(newArr);
```

## 实例成员

- fill方法: 用某个数据填充数组

```js
let arr = new Array(200); // 设置200项数组
console.log(arr.fill("abc")); // 将arr 的数组 填充 200项abc
```

- pop
- push
- reverse: 将当前数组颠倒顺序

```js
let arr = [1,2,3,4,5]; // 创建一个数组 并声明
console.log(arr.reverse()); // 颠倒数组的顺序 arr.reverse(); 实例方法
```
- shift
- sort: 对数组进行排序（按照字符编码进行排序）

```js
let arr = [1,29,3,44,55]; // 创建一个数组
console.log(arr.sort()); // 对arr的数组进行排序  arr.sort(); 实例方法
// 转换字符串 按第一个数字大小进行排序


// 代入函数a,b 比较大小
// 结果如果小于0  那么a会被排列到b之前
// 结果如果等于0  那么a和b的相对位置不变
// 结果如果大于0  那么b会被排列到a之前
console.log(
            arr.sort(function (a, b) {
                return a - b; // 正向排序
                // return b - a; 
        )


// 随机打乱顺序
console.log(
    arr.sort(function(a,b){
        return Math.random() - 0.5;  // 50% 有一半的机率 是正数 一半的机率是负数
    })
)
```
- splice
- unshift

纯函数、无副作用函数: 不会导致当前对象发生改变

- concat 添加

```js
// 创建数组
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];
// 声明一个变量 存入
// arr1 后 添加arr 2 arr3
let newArr = arr1.concat(arr2,arr3);
console.log(newArr); // 输出变量newArr

console.log(arr1); // 原来的数组不会改变
```
- includes: 数组中是否包含满足条件的元素  <!-- 实验性质 -->

```js

let arr = [1,2,3,4,5,6]; // 创建一个数组
let isEx  = arr.includes(6); // 查询 数组中是否包含6
console.log(isEx); // 输出 类型为boolean


let newArr = arr.includes(6,3); // 查询 从数组下标为3的位置 开始 目标是6
console.log(newArr); // 输出

```

- join 连接所有数组元素组成一个字符串

```js

let arr = [1,2,3];
console.log(arr);

// 输出效果为 1 2 3 4 

console.log(arr.join(","));

// 输出效果为 1,2,3,4

```

- slice 抽取当前数组中的一段元素组合成一个新数组

```js

let arr = [1,2,3];
console.log(arr.slice()); // ()不填写 抽取数组中所有元素

console.log(arr.slice(0,4)); // 抽取下标0-4的元素(不包括下标4的元素) 组成一个新的数组

```

- indexOf 返回数组中第一个与指定值相等的元素的索引,如果找不到这样的元素,则返回-1

```js

let arr = [1,1,2,3,4,5];

console.log(arr.indexOf(1));
// 查询数组中第一个与指定的值 相等的元素 并返回下标

console.log(arr.indexOf(20));
// 如果查询不到 则返回 -1

```

- lastIndexOf()  返回数组中最后一个(从右边数第一个) 与指定值相等的元素的索引,如果找不到这样的元素,则返回-1

```js

let arr = [1,1,2,3,4,5];

console.log(arr.lastIndexOf(1));
// 查询数组 从右往左数(倒数) 第一个与指定的值 相等的元素 并返回下标


console.log(arr.lastIndexOf(20));
// 如果查询不到 则返回  -1
```


- forEach() 为数组中的每一个元素执行一次回调函数(遍历数组)

```js

let arr = [1,2,3,5];
arr.forEach(function(item,i,a){
    console.log(item,i,a);
    // item 遍历一次数组
    // i 数组的下标
    // a循环数组本身
})

```

- every() 是否所有元素都满足条件

```js

let arr = [60,70,67,92,56]; // 创建数组


//  循环item 查询数组内的元素是否都满足条件
let result = arr.every(function(item,i,a){
    return item >= 60;  // 条件 数组内元素是否都大于或等于60
})
console.log(result);

// 如果数组内元素 有不满足条件的 则返回false

```

- some() 如果数组中至少有一个元素满足测试函数,则返回true,否则返回false

```js

let arr = [60,70,67,92,56]; // 创建函数

// 循环item 查询数组中是否至少有一个元素满足条件
let result = arr.some(function(item,i,a){
    return item >= 60; // 条件 数组内元素是否至少有一个满足 大于或等于60
})

console.log(result);

// 如果数组内元素 至少有一个满足条件 则返回ture 反之则false

```

- filter() 将所有在过滤函数中返回true 的数组元素放进一个新数组中并返回

  过滤,得到满足条件的元素组成的新数组

```js

let arr = [77,25,88,55,30]; // 创建数组

// 循环数组 并过滤出 满足条件的元素 形成一个新的数组
let newArr = arr.filter(function(item,i,a){
    return item >= 60; // 条件
})

console.log(newArr);

```

- find() 查找第一个满足条件的元素 返回元素本身,如果没有找到,返回undefined(实验性方法)

```js

// 创建数组 学生信息
let arr = [{name:"a",age:11,score:55},{name:"b",age:12,score:65},{name:"c",age:22,score:85}]

// 循环数组查找第一个满足条件的元素 并返回元素本身
let result = arr.find(function(item,i,a){
    return item.score >= 60; // 条件
})
console.log(result);
```

- findIndex() 查找第一个满足条件的元素,返回元素的下标  如果未查到则返回-1

```js

let arr = [{name:"a",age:11,score:55},{name:"b",age:12,score:65},{name:"c",age:22,score:85}]

// 循环数组 查找第一个满足条件的元素 如果查找到了 则返回这个元素的下标
// 如果未查到则返回-1
let result = arr.findIndex(function(item,i,a){
    return item.score >= 60;
})

console.log(result);

```

- map() 映射,将数组的每一项映射成为另一项

```js

let arr = [29,30,31,35]; // 创建一个数组

// 循环这个数组 映射(复制给其他元素) 并产生一个新的数组
let newArr = arr.map(function(item,i,a){
    return {
         name:"学生" + (i+1), // 下标从0开始  i+1 等于从1开始
         score:item  // 将item映射(复制)给score
    }
}).map(function(item,i,a){ // 循环映射 newArr对象的name属性
    return item.name;
})

console.log(newArr);

```

- reduce() 统计 累计

```js

let arr = [1,2,3,4,5]; // 创建一个数组

// 运算过程 先把1赋值给a 2赋值给b 得到结果3
// 再把3赋值给a 把3赋值给b 得到结果6
// 再把6赋值给a 把4赋值给b 得到结果10
// 再把10赋值给a 把5赋值给b 得到最终结果15
let num = arr.reduce(function(a,b){
    // console.log(a,b); 检查a + b 的运算过程
    return a + b;
},0) // 初始值

// 如果数组只有一个元素 则直接返回这个元素

// 空数组运算会报错

// 为了应对空数组这样的场景 实例方法redice支持第二个参数

// 初始值 如果设置初始值之后 空数组的话 返回初始值
// 如果数组有值 则把初始值传给参数a 把数组内的第一项值传给b 进行后续运算

console.log(num); // num = 15

```

- 作业

```js
let arr = [1,2,3,4,5,6,-1,-2,-3,-4,-5,-6];
// 去掉数组中的负数,然后对每一项平方,然后再对每一项翻倍,然后求和
// 不许使用循环

let result= arr.filter(function(item){
    return item >= 0;
}).map(function(item){
    return item ** 2;
}).map(function(item){
    return item * 2;
}).reduce(function(a,b){
    return a + b;
},0)

console.log(result);

// 运用知识:
// filter() 将所有在过滤函数中返回true 的数组元素放进一个新数组中并返回
// 过滤,得到满足条件的元素组成的新数组

// map() 映射,将数组的每一项映射成为另一项,并产生新的数组

// reduce() 统计 累计
// 如果数组只有一个元素 则直接返回这个元素

// 空数组运算会报错

// 为了应对空数组这样的场景 实例方法redice支持第二个参数

// 初始值 如果设置初始值之后 空数组的话 返回初始值
// 如果数组有值 则把初始值传给参数a 把数组内的第一项值传给b 进行后续运算
```