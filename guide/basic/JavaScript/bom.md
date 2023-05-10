# BOM

## 简介

BOM:Brpwser Object Model

## 计时器
- setTimeout方法

- window对象的setTimeout方法: 指定时间到达后运行某个函数一次，第一个是函数，也可以传函数名字，第二个是时间毫秒，一秒等于1000毫秒

计时器是异步的，当时机成熟之后才会执行

计时器会返回一个数字, 该数字表示计时器的编号

```JS
var btn = document.querySelector("button");

btn.onclick = function(){
    // 3秒钟运行此函数
   var timer= setsetTimeout(function (){

    },3000)
    // 后面会直接运行下面的函数 
}
```


- clearTimeout方法: 清除计时器，要传一个参数就是计时器的id

#### 用setTimeout如何一直运行

```JS
var timer1,num = 0;
var h1 = document.querySelector("h1");
btn.onclick = function (){
    interval(function(){
        num++;
        h1.innerHTML = num;
    },300)
}

function interval (callback,duration){
     timer1 =setTimeout(function(){
        callback();
        interval(callback,duration);
    },duration)
}

btn2.onclick = function(){
    // 清除计时器
    clearTimeout(timer1);

}
```

- setInterval方法: 指定间隔时间到达后运行某个函数，会不断的运行,也是俩个参数
```JS
setInterval(function(){

},1000);
```
 - clearInterval方法: 清除计时器

## window对象

### 自身方法

- open

打开一个新窗口,三个参数
```JS
// open("页面路径","打开目标","配置") 2和3可以不传 2: -self自身窗口打开, -blank新窗口打开,默认不一定 3.窗口的配置

var btn = document.querySelector("button");
btn.onclick = function(){
    window.open("https://www.jd.com"),null,"width=500,height=500"; 
}
```
有返回值，返回一个window对象

- alert: 弹出一个东西，跟浏览器有关

```JS
alert("qwer");
```

- confirm: 表示弹出，有确定(ture)和取消(false)

- prompt: 提示输入，确定为字符串,取消为null


- document.write: 在当前文档流中写入内容，如果当前文档流不存在，则新开一个文档流

### 对象属性

- location: 地址栏对象

location.href:得到当前地址

location.reload()方法: 刷新当前页面

- history: 历史记录

history.lenght: 得到当前历史记录有几个
history.go方法:整数前进，负数后退
history.back方法: 后退
history.forword方法: 前进
 
- console

log方法: 打印对象的valueOf的返回值

dir方法: 打印对象结构

tiem方法和timeEnd方法: 用于计时

```JS 
console.time("测试");
var sum = 0;
for(var i=0;i<10000;i++){
    sum+=i;
}
console.timeEnd("测试");

// 用于计算运行的时间
```