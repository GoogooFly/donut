# DOM 核心

## web api概述

ECMAscript标准

标准库: ECMAScript中的对象和函数

Web Api:浏览器宿主环境中的对象和函数

1. 知识繁杂
2. 成体系的知识
3. 程序思维: 知识+程序思维 = 应用
4. 兼容性: 了解，不记忆

原生JS,JQuery，框架，脚手架

Web Api:

- BOM: Browser Object Model，浏览器对象模型
- Dom: Domcument Object Modek,文档对象模型

BOM: 控制浏览器本身
DOM: 控制HTML文档

ES 由 ECMAScriot 规定的

WebApi 由 W3C (万维网联盟)制定

### 关于DOM

- DOM 0
- DOM 1
- DOM 2
- DOM 3
- DOM 4 2015年

**DOM是什么**

DOM的核心理念，是将一个HTML或XML文档，用对象模型表示，每个对象称之为DOM对象

DOM对象又称之为节点Node

节点的类型:

- DocumentType,文档类型节点
- Document，文档节点，表示整个文档
- Comment，注释节点
- Element，元素节点
- TEXT，文本节点
- Attribute，属性节点
- DocumentFragement，文档片段节点

DOM树:文档中不同的节点形成的树形结构。

## 获取DOM节点

获取DOM对象

> 全局对象 window 中有属性document，代表的是整个文档节点

### 旧的获取元素点的方式

DOM 0

- document.body:获取body元素节点
- document.head:获取head元素节点
- document.links:获取页面上所有的超链接元素节点,类数组
- document.anchors: 获取页面上所有的锚链接(具有name)元素节点
- document.forms: 获取页面中所有的form元素节点

### 新的获取元素节点的方式

#### 通过方法获取

- document.getElementById: 通过id获取对应id的元素

```JS
var div1 =document.getElementById("mydiv1");
```

- document.getElementsByTagName: 通过元素名称获取所有div元素如果写下标则获得对应的div

```JS
var div = document.getElementsByTagName("div")[0];
var div1 =document.getElementsByTagName("div");
```

- document.getElementsByClassName: 通过元素的类样式获取元素，IE9以下无效
- document.getElementsByName: 通过元素的name属性值获取元素
- document.querySelector: 通过CSS选择器获取元素，得到匹配的第一个，IE8以下无效
- document.querySelectorAll: 通过CSS选择器获取元素，得到所有匹配的结果，IE8以下无效
- document.documentElement: 获取根元素,直接用，是属性

细节:

1. 在所有的得到类数组的方法，除了querySelectorAll，其他的方法都是实时更新的。
2. getElementById 得到元素执行效率最高
3. 书写了id的元素，会自动成为window对象的属性。他是一个实时的单对象。事实上的标准。不推荐使用
4. getElementsByTagName，getElementsByClassName，querySelector，querySelectorAll，可以作为其他元素对象

```JS
var ul = document.querySelector("ul"); // 得到ul 
ul.getElementsByTagName("li"); // 获取ul下面的所有的li
```

#### 根据节点关系获取节点

- parenNode: 获取父节点(父元素，文档)
- previousSibling: 获取上一个兄弟节点
- nextSibling: 获取下一个兄弟节点
- childNodes: 获取所有的子节点
- firstChild: 获取第一个子节点
- lastChild: 获取最后一个子节点
- attrobutes: 获取某个元素的属性节点

#### 实时集合

childNodes也是实时集合

属性

获取元素节点

- parentElement 获取父元素
- previousElementSibling: 获取上一个兄弟元素
- nextElementSibling: 获取下一个兄弟元素
- children: 获取元素的所有子元素
- firstElementChild: 获取第一个子元素
- lastElementChild: 获取最后一个子元素

### 获取节点信息

- nodeName: 获取节点名称
- nodeValue: 获取节点的值
- nodeType: 节点类型，是一个数字
- defaultValue : 得到文本框默认的value值
- selectedIndex: 父级元素select得到选中项option的索引 
- options: 父级元素select的option得到下面的所有选项是个伪数组

## dom元素操作

### 初始元素事件

元素事件: 某个元素发生一件事 (被点击 click)

事件处理程序: 发生了一件事情，应该做什么事情，是一个函数

注册事件: 将事件处理程序与某个事件关联

**this关键字在事件处理程序中指代当前发生的事件元素**

```JS
var btn = document.getElementById("btn");
var count = 0;
// 注册事件
btn.onclick = function(){
    console.log(count++);
}
```
### 获取和设置元素属性

- 通用方式: getAttribute() 传入属性名得到属性值 ,setAttribute设置属性(属性名,属性值)

不推荐
                    
- tagName: 得到元素名称

#### 可识别属性

正常的HTML属性

- dom对象.属性名: 推荐

```HTML
<input type="text" value="ancsf"> value是正常的可识别属性
<button id="btnGetTxt" value="i">获取文本框内容</button> Button的value自定义属性获取不到
```
```JS
document.getElementById("btnGETTxt").onlick = function(){
    var inpunt = document.querySelector("input[type=text]");
    console.log(input.value); // 获取value的值
}
```
```JS
// 点击图片切换
var i =1; //
var img = document.querySelector("img");
img.onclick = function(){
    i++;
    if(i===3){
        i=1;
    }
    img.src =i+".jpg";
}
```
细节: 

1. 正常的属性即使没有赋值，也有默认值

```HTML
<input type="text"> 即使没写也有默认的value得到空字符串
```
2. 布尔属性在dom对象中，得到的是Boolean
```HTMl
<input type="checkbox"> 即使没有写checked也得到了选中为turn不选为false
```
3. 某些表单元素可以获取到某些不存在的属性
4. 某些属性与标识符冲突，此时，需要更换属性名

**class改为className**

#### 自定义属性

HTML5 建议自定义属性使用``` data ```作为前缀

如果遵从HTML5 自定义属性规范，可以使用```dom对象.dataset.属性名 ```获取和设置,控制属性

删除自定义属性

- removeAttribute("属性名")
- delete dom元素.dataset.属性名    推荐

### 获取和设置元素内容

- innerHTML: 获取和设置元素的内部HTML文本
- innerText: 获取和设置元素内部的纯文本，仅得到元素内部显示出来的文本

- textContent: 获取和设置元素内部的纯文本，textContent得到的是所有内部源代码中的文本

### 元素结构重构

- 父元素.appendChild(元素): 一个元素加到另一个父亲子元素的尾部
- 父元素.inserBefore(待插入的元素，哪个元素之前);
- 父元素.replaceChild(替换的元素，被替换的元素);

- 父元素.append() 可以插多个元素,还没有成为标准;

细节:

更改元素结构效率较低，尽量少用

### 创建和删除元素
 
#### 创建元素

- document.createElement("元素名"): 创建一个元素对象
   - document.createTextNode("文本");
   - document.createDocumentFragment(): 创建文档片段容器

### 克隆元素

- dom对象.cloneNode(是否深度克隆); 复制一个新的dom对象并返回  

#### 删除元素

- removeChild(): 父元素调用，传入子元素 (谋杀),返回对象,还可以加回去

- remove() 删除元素 把自己删除,自杀

## DOM元素样式

### 控制DOM元素的类样式

- className: 获取或设置元素的样式,比较麻烦
```JS
// 改变css选择器
var div = document.querySelector("red");
div.onclick = function(){
    this.className = "green";
}
```
- classList: dom4的新属性,是一个用于控制元素类名的对象 
 - add: 用于添加一个类名
 - remove: 用于移除一个类名
 - contains: 用于判断一个类名是否存在
 - toggle: 用于添加/移除一个类名 ,有第二个参数表示turn强制添加,false表示强制移除，IE不支持
```JS
// 改变css选择器
var div = document.querySelector("red");
div.onclick = function(){
    if(this.classList.contains("red")){
        this.classList.remove("red");
        this.classList.add("green");
    }else{
        this.classList.remove("green");
        this.classList.add("red");
    }
}
``` 
 - toggle

```Js
var var div = document.querySelector(".item");
div.oncilk =function(){
    this.classList.toggle("red"); // 如果有red会移除，如果没有会添加
}

```

### 获取样式

- dom.style: 得到**行内样式**对象

- window.getComputedStyle(dom元素):得到某个元素最终计算的样式

 - 传入第二个参数伪类名，用于得到某个元素的某个伪元素样式

**css的短横杠命名，需要转换为小驼峰命名**

### 设置样式

dom.style.样式名 = 值

设置的是行内样式。

