# DOM 事件

## 简介

### 术语

- 事件: 发生一件事

- 事件类型: 发生了什么样子事情，点击，鼠标按下，键盘按下..

- 事件处理程序: 一个函数，用于当某个事情发生时运行。

- 事件注册: 将一个事件处理程序，挂载到某个事件上。

### 事件流

事件流: 当某个事件发生的时候，哪些元素会监听到该事件发生，这些元素发生该事件的顺序。

**当一个元素发生了某个事件时，那该元素的所有祖先元素都发生了该事件**

IE     事件冒泡:先运行最里程的元素，然后再依次触发外层元素
网景   事件捕获: 先触发外层的元素，然后再依次触发里面元素

目前，标准规定，默认情况下，事件是冒泡方式触发。

事件源也叫事件目标: 事件目标阶段的元素

## 事件注册

也叫事件绑定

### dom0

将事件名称前面加上on, 作为dom的属性名，给该属性赋值为一个函数，即为事件注册。

```JS
btn.onclick = function = {
    .....
}
```

移除: 重新给事件属性赋值，通常赋值为null和undefined
```JS
btn.onclick = null;
```

### dom2

dom对象.addEventListener: 注册事件

与dom0的区别

```JS
// 第一个事件类型不用加on,第二个函数，第三个表示是否在捕获阶段触发
btn.addEventListener("click",function(){})
```
1. dom2可以为某个元素的同一个事件，添加多个处理程序，按照注册的顺序依次运行。
2. dom2允许开发者控制事件处理的阶段，默认冒泡阶段，使用第三个参数，表示是否在捕获阶段触发，默认为false为冒泡，turn为捕获

   1. 如果元素是目标元素(事件源)，第三个参数无效

事件的移除: dom对象.removeEventLostener(事件名，处理函数); 

```JS
 var btn = document.getElementById("btn");
        var btn2 = document.getElementById("btn2");
        function handler() {
            console.log("1");
        }
        btn.addEventListener("click", handler);

        function handler2() {
            console.log("2");
        }
        btn.addEventListener("click", handler);
        // 点击btn2移除btn事件

        btn2.addEventListener("click", function () {
            btn.removeEventListener("click", handler);
        });
});
```
**dom2中如果要移除事件，不能使用匿名函数**

**细节**

1. dom2在IE8及以下不兼容,需要使用attachEvent，detachEvent添加和移除事件
第三个参数可以写个对象,是否允许一次{once: ture};，默认为false

2. 添加和移除事件时，可以将第三个参数写为一个对象，进行相关配置

3. dom2如果要移除捕获阶段的事件在移除事件添加第三个参数为turn

## 事件对象

事件对象封装了事件的相关信息

### 获取事件对象

- 通过事件处理函数的参数获取

```JS
var btn = document.querySelector("button");
btn.onclick = function(e){
    // 通过参数打印事件对象
    console.log(e);
}
```
- 旧版本的IE浏览器通过window.event获取
```JS
var btn = document.querySelector("button");
btn.onclick = function(e){
    // 通过参数打印事件对象
    console.log(window.event);
}
```

### 事件对象的通用成员

- target & **IE**srcElement :获取不同的事件目标

事件目标(事件源)

```JS
// 点击div获取div事件,在里面的元素获取里面的元素
var div = document.querySelector("div");
div.onclick = function(e){
    if(e.target.tagName ==="BUTTON"){ // 判断你点击是否为button
      console.log(e.targrt.tagName );
    }
      // srcElement旧版本IE
}
```
事件委托: 通过给祖先元素注册事件，在事件处理程序中判断事件源进行不同的处理。

通常，事件委托用于动态生成元素的区域。

- currentTarget

当前目标: 获取绑定事件的元素，等效于this

- type

字符串，得到事件的类型

- preventDefault& **IE** returnValue方法

阻止浏览器默认行为

```JS
var a = document.querySelector("a");
a.addEventListener("click",function(e){
    e.preventDefault(); // 阻止浏览器默认的行为
})
```
dom0的方式: 在事件处理程序中返回false
```JS
btn.onclick = function(){
    return false;
     // dom0 IE浏览器8及IE以下
    // e.returnValue = false;
}
```
针对a元素，可以设置为功能性链接解决跳转问题

- stopPropagation方法

阻止事件冒泡

```JS
var btn = document.getElementById("button");
btn.oncilck =function(e){
e.stopPropagation();
}
// 阻止事件冒泡
```

- eventPhase方法

得到事件所处的阶段

1. 事件捕获
2. 事件目标
3. 事件冒泡

## 鼠标事件

### 事件类型

on

- click: 用户单击主鼠标按钮 (一般是左键) 或者按下在聚焦时按下回车键时触发

- dblclick: 用户双击主鼠标按键触发 (频率取决于系统配置)

- mousedown: 用户按下鼠标任意按键时 触发

- mouseup: 用户抬起鼠标任意键时触发

- mousemove: 鼠标在元素上移动时触发

- mouseover: 鼠标进入元素时触发

- mouseout: 鼠标离开元素是触发

- mouseenter: 鼠标进入元素时触发，该事件不会冒泡

- mouseleave: 鼠标离开元素时触发，该事件不会冒泡

区别: 

- over和out，不考虑子元素，从父元素移动到子元素，对于父元素而言，仍然算作离开
- enter和leave，考虑子元素，子元素仍然是父元素的一部分,不算做离开

- mouseenter和mouseleave不会冒泡

### 事件对象

所有的鼠标事件，事件处理程序中的事件对象，都为 MouseEvent

- altkey: 触发事件时，是否按下了键盘的alt键

```JS
btn.onclick=function(e){
      console.log(e.altkey);
}
```
- ctrkey: 触发事件时，是否按下了键盘的ctrl键
- shiftkey: 触发事件时，是否按下了键盘的shift键
- button: 触发事件时，按下的鼠标按键类型
```JS
btn.onclick=function(e){
      console.log(e.button);
}
```
  - 0: 左键
  - 1: 中键
  - 2: 右键

**鼠标移动进去事件是 0**

位置:

- page: pageX，pageY，当前鼠标距离页面的横纵坐标
 
```JS
p.onclick=function(e){
    console.log(e.pageX,e.pageY);
}
```
- client: clientX,clientY,鼠标相对于视口的坐标

```JS
p.onclick=function(e){
    console.log(e.clientX,e.clientY);
}
```
- offset: offsetX，offsetY，鼠标相对于事件源的内边距的坐标。
- screen: screenX，screenY，鼠标相对于屏幕
- x，y,等同于clientX，clientY
- movement: movementX，movementY，只在鼠标移动事件中有效，相对于上一次鼠标位置，偏移的距离

## 键盘事件

### 事件类型

on

- keydown: 按下键盘上任意键触发，如果按住不放，会重复触发此事件
- keypress: 按下键盘上一个**有反馈的字符键**时触发
- keyup: 抬起键盘上任意键触发

keydown，keypress 如果阻止了事件默认行为，文本不会显示

### 事件对象

键盘事件类型是这个: keyboardEvent

- chanCode: 在press用,得到UNcode编码

- code: 得到按键字符串，适配键盘布局

```JS
inp.onkeydown = function(e){
    console.log("1",e.code)
}
```
- key: 得到按键字符串，不适配键盘布局。能得到打印字符。
- keycode，which: 得到键盘编码

## 其他事件
on

### 表单事件

- focus: 元素聚焦的时候触发(能与用户交互的元素，都可以聚焦)，该事件没有冒泡

- blur: 元素失去焦点时触发，该事件不会冒泡

- submit: 提交表单事件，仅在form元素有效，可以冒泡

- change: 文本改变事件

- input: 文本改变事件，即时触发

### 其他事件

window全局对象

- load, DOMContentLoaded, document.readystatechange

window的load事件: 页面中所有资源全部加载完毕的事件

图片的load: 图片资源加载完毕的事件

> 浏览器渲染页面的过程:

1. 得到页面源代码
2. 创建document节点
3. 从上到下，将元素依次添加到dom树中，每添加一个元素，进行预渲染
4. 按照结构，依次渲染子节点

在script,不是外部资源立即执行，是外部资源先得到资源然后再立即执行

里面写入asyns表示异步加载也就是现实里面的同步

**js代码应该尽量写到页面底部**

**建议不要变**

- css应该写到页面顶部: 避免出现闪烁 (如果放到页面底部，会导致元素先没有样式，使用丑陋的默认样式，然后当读到css文件后，重新改变样式)

- JS应该写在页面底部: 避免阻塞后续的渲染，也避免运行js时，得不到页面中的元素。

**图片音频视频都是异步渲染** 

document.DOMContentLoaded 事件: dom树构建完成后发生，只能dom2创建dom0不行

#### document.readystatechange

当文档属性发生改变时触发的事件

####  document.readyState属性 事件的三种状态

readystate: loading,interactive,complete

loading: 正在加载

interactive: 触发DOMContentLoaded事件 可交互

complete: 触发window的load事件 完成


- unload,beforeunload

beforeunload: window的事件，关闭窗口时运行，可以阻止关闭窗口,返回字符串可以提示,ie还能用  
unload: window的事件，关闭窗口时运行

- scroll

窗口发生滚动时运行的事件,window可以绑定,元素也可以绑定

通过scrollTOP和scrollLeft可以获取和设置滚动距离

#### 如果获取浏览器滚动高度

documen.documElement.scrollTop或者document.body.scrollTop

浏览器不同,解释不同但是总有一个没有值,所以我们一般相加

- resize

窗口尺寸发生改变时运行的事件，监听的是视口尺寸

### 动画事件

dom0和dom2都行,只能用于@keyframes animation 不能用于transition动画

animationend事件

 事件会在一个 CSS 动画完成时触发(不包括完成前就已终止的情况,例如元素变得不可见或者动画从元素中移除)。



#### 事件参数

| 属性                 |     类型      |                             描述                             |
| :------------------- | :-----------: | :----------------------------------------------------------: |
| `target` 只读        | `EventTarget` |                   事件目标（DOM 顶层目标）                   |
| `type` 只读          |  `DomString`  |                           事件类型                           |
| `bubbles` 只读       |   `boolean`   |                  事件是否正常冒泡(可以冒泡)                  |
| `cancelable` 只读    |   `boolean`   |                     可否取消该事件(可以)                     |
| `animationName` 只读 |  `DomString`  |                   得到动画的名称animation                    |
| `elapsedTime` 只读   |   `number`    | 动画运行时长，单位为秒，与直到该事件被触发的时间相一致，不包括任何动画暂停时的时长。应等于 `animation-iteration-count`(运行的次数) 乘以`animation-duration`(运行的秒数)的积，动画总活动的时长。 |

### 属性 

window.screen.height: 用户屏幕高度 window.screen.width: 用户屏幕宽度
window.outerwidth: 浏览器宽 window.outerheight: 浏览器高
window.innerWidth: 浏览器窗口宽度尺寸, 包含滚动条
window.innerHeight: 浏览器窗口高度尺寸,包含滚动条
document.documentElement.clientWidth:视口的宽,不包含滚动条
document.documentElement.clientHeight:视口的高，不包含滚动条

#### 某个元素的
div.clientWidth:元素的宽, 不包含边框和滚动条
div.clientHeight:元素的高, 不包含边框和滚动条
div.offsetWidth: 元素宽,包含边框和滚动条
div.offsetHeight:元素的高,包含边框和滚动条
duv.scrollHeight:得到实际内容算出来的高度
div.scrollWidth:得到实际内容算出来的宽度

- contextmenu:

右键菜单事件

- paste:

粘贴事件

- copy:

复制事件

- cut

剪切事件

### 剪切粘贴对象

e.clipboardDate|| window.clipboardDate 

getDate("text/plain") 得到用户输入什么类型的数据

setDate("text/plain") 设置数据 第一个参数是数据类型,第二个数据的值

clearDate("text/plain") 清空剪切板

## 元素位置

- offsetParent

获取某个元素第一个定位的祖先元素，如果没有，则得到body

```JS

var div1 =document.querySelector("div1").offsetParent;

```
**body的offsetParent为null**

- offsetLeft，offsetTop 

相对于该元素的offsetParent的坐标

**如果offseParent是body，则将其当作是整个网页**

- getBoundingChlientRect方法

该方法得到一个对象，该对象记录了该元素相对于视口的距离

```JS
var rect = div.getBoundingChlientRect();
```
位置: left top buttom right

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect


## 事件模拟

- onclick: 点击事件

```JS
btn.onclick = function(){
    console.log('点击了');
    // 模拟btn1也被点击了
    btn1.click();
```
- sumbit: 手动触发提交事件
```JS
div.onclick=function(){
    var form = documemt.queryselector("form");
    form.submint(); 
}
```
- dispatchEvent

```JS
btn.onclick = function(){
    // 第一个参数事件类型
    var event = new MouseEvent("mouseenter",{
        bubbles:false // 不能冒泡
    });
    btn1.dispatchEvent(event); // 模拟移入事件
}

```

## 其他补充

- window.scrollx，window.pageXOffset，window.scrollY，window.pageYOffset

window.scrollx，window.pageXOffset: 相当于根元素的scrollleft
window.scrollY，window.pageYOffset: 相当于根元素的scrolltop

- scrollTo，scrollBy

scrollTo: 设置滚动条位置,第一个参数x，第二个y，

scrollBy: 原来的基础增加多少，滚动条的位置,第一个参数x，第二个y，

- resizeTo,resizeBy

resizeTo:设置窗口的尺寸 第一个参数窗口的宽度,第二个参数窗口的高度

resizeBy:原来的基础增加多少 第一个宽度,第二个参数高度

