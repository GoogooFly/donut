# 其它元素

## iframe元素

框架页

通常用于在网页中嵌入另一个页面

iframe 可替换元素

1. 通常是行盒
2. 通常显示的内容取决于元素的属性
3. CSS不能完全控制其中的样式
4. 具有行块盒的特点

## 在页面使用flash

object

embed

它们都是可替换元素

```html
            <!-- 兼容的写法 -->
<object data="资源地址" type="资源类型">
    <param name="" value=""><!-- 输入参数 -->
    
    <embed quality="参数" src="资源地址" type="资源类型">
</object>

```

MIME(Multipurpose Internet Mail Extensions)

多用途互联网邮件类型：

比如,资源是一个jpg图片,MIME:image/jpeg

## 表单元素

一系列元素,主要用于收集用户数据

### input元素

输入框

- type属性:输入框类型

type: text,普通文本输入框
type: password,密码框
type: date,日期选择框,有兼容性问题
type: search,搜索框,有兼容性问题
type: range,滑块 可设置最小值min 最大值max ,有兼容性问题
type: color,颜色选择框
type: number,数字输入框 可设置最小值min 最大值max 步进 step
type: checkbox,多选框,默认选中 checked  布尔属性
type: radio,单选框  默认选中 checked  布尔属性
type: file,选择文件上传


- value属性:输入框的值
- placeholder属性:显示提示的文本,文本框没有内容时显示

input元素可以制作按钮

当type为reset、button、submit时,input表示按钮

### select元素

下拉列表选择框

通常和option元素配合使用

默认选中 selected  布尔属性

```html

<select>
    <!-- optgroup 分组 -->
    <!-- lable 表示分组的名字 -->
    <optgroup label="才艺表演">
        <option>冯提莫</option>
    </optgroup>
    <!-- multiple 布尔属性 选择多个 -->
    <optgroup lable="游戏主播" multiple>
        <option>WETed</option>
        <option>infi</option>
        <option>th000</option>
    </optgroup>    
</select>

```

### textarea元素 

文本域,多行文本框

可替换元素

```html

<!-- cols 表示一列可以排成多少个文字 -->
<!-- rows 表示可以排成多少列 -->
<textarea name="" id="" cols="30" rows="10"></textarea>

```

### 按钮元素

button

type属性:reset、submit、button,默认值是submit

### 表单状态

readonly属性:布尔属性,是否只读,不会改变表单显示样式  内容固定,但可以继续输入

disabled属性:布尔属性,是否禁用,会改变表单显示样式    不能使用,不可以继续输入

### 配合表单元素的其他元素

#### label

普通元素,通常配合单选和多选框使用

可以通过for属性,让label元素关联某一个表单,for属性书写表单元素id的值

<!-- 显示关联 -->
```html
<p>

请输入性别:
<input id="radMale" name="gender" type="radio">
<label for="radMale">男</label>

<input id="radFemale" name="gender" type="radio">
<label for="radFemale">女</label>

</p>
```
<!-- 隐式关联 -->
```html
<p>

请输入性别:
<label>
    <input name="gender" type="radio">
    男
</label>

<label>
    <input name="gender" type="radio">
    女
</label>

</p>

```

#### datalist

数据列表

该元素本身不会显示到页面,通常用于和普通文本框配合使用

input使用list datalist使用id 来关联

有兼容性问题

#### form元素

通常情况下,会将整个表单元素,放置到form元素的内部,作用是当提交表单时,会将form元素内部的表单内容以合适的方式提交到服务器

form元素对开发静态页面没有什么意义

```html
<!-- action 发送地址 -->
<!-- method 提交方式 POST/GET-->
<form action="" method="GET">
    <p>
        账号:
        <input name="loginid" type="text">
    </p>
    <p>
        密码
        <input type="password" name="loginpwd">
    </p>
    <p>
        <button type="submit">提交</button>
    </p>
</form>

```

#### fieldset元素

表单分组

legend 分组的标题 类似 lable

## 美化表单元素

### 新的伪类

1. focus

元素聚焦时的样式 用outlin 设置内边框

2. checked

单选或多选框被选中的样式

### 常见用法

1. 重置表单元素样式

2. 设置textarea是否可以调整尺寸

```CSS

textarea{
    /* both 默认值 两个方向都可以调整尺寸 */
    resize:both;
    /* 两个方向上都不能调整尺寸 */
    resize:none;
    /* 只能调整x轴方向 */
    resize:horizontal;
    /* 只能调整y轴方向 */
    resize:vertical;
}

```

3. 文本框边缘到内容的距离

```CSS

input{
    /* 首行缩进两个字符 */
    text-indent:2em;
}

```

4. 控制单选和多选的样式


5. placeholder 伪元素设置样式

```CSS

input["text"]::placeholder{
    color: #ccc;
}

```

6. 溢出出现滚动条

```CSS

div{
    /* 溢出出现滚动条 没有溢出则消失 */
    overflow-y:auto;
}

```

## 表格元素

在css技术出现之气那,网页通常使用表格布局

后台管理系统中可能会使用表格

前台：面向用户

后台：面向管理员,对界面要求不高,对功能性要求高

表格不再适用于网页布局？表格的渲染速度过慢。

```html
<!--  -->
<table>
   <caption>这是表格标题</caption>
   <!-- 表头 -->
   <thead>
       <!-- table row 行 -->
       <tr>
           <th>列</th>
       </tr>
   </thead>
   <tbody>表体</tbody>
   <tfoot>表尾</tfoot>
</table>

```

## 其他元素

1. abbr

缩写词

```html
<!-- 用于为页面添加样式 -->
<p>
    <abbr title="cascading style sheet">CSS</abbr>
</p>

```

2. time

提供给浏览器或搜索引擎阅读的时间

```html
<!-- 给浏览器阅读样式  无效果 -->
<p>
    <time datetime="2020-11-29">今年十一月</time> 我看了html和css的课程
</p>

```

3. b  (bold)

以前是一个无语义元素,主要用于加粗字体

4. q

一小段引用文本  自动增加双引号 cite

5. blockquote

大段的引用文本  自动增加margin  cite="" 中输入引用地址 给浏览器阅读

6. br

无语义
主要用于在文本中换行

7. hr

无语义
主要用于分隔

8. meta

```html
<!-- 为了优化搜索引擎(SEO) -->
<head>
    <meta name="keywords" content="商城">
    <meta name="author" content="邮箱">
    <meta name="description" content="asdasdad">
</head>
```

9. link

链接外部资源(CSS、图标)

rel属性:relation,链接的资源和当前网页的关系

```html

<!-- 链入图标 -->
<head>
    <meta rel="shortcut icon" href="">
    <!-- href链接图标以ico结尾 -->
</head>

```

type属性:链接的资源的MIME类型 可省略