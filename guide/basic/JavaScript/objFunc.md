# Object 和 Function

标准库 (标准API)

- 库: liberary
- API: 应用程序编程接口, Application (应用程序) Programing (编程) Interface (接口)
- 标准: ECMAScript标准

## Object

### 静态成员

- key(某个对),得到某个对象的所有属性名数组
- valuse(某个对象),得到模具个对象的所有属性值数组
- entries(某个对象),得到某个对象的所有属性名和属性值的数组

## Function

**所有函数都具有Function中的实例成员**

**语法: argument: 在函数中使用,获取该函数调用时,传递的所有参数**

**argument是一个类数组 (也称为伪数组: 没有通过Array构造函数创建的类似于数组结构的对象),伪数组会缺少大量的数组实例方法**  

**argument数组中的值,会与对应的形参映射**

### 实例成员

> 实例成员你可以被重写

**所有对象,都拥有Object的所有实例成员**

- toString方法: 得到某个对象的字符串格式

默认情况下,该方法返回"[object Object]"

- length属性,得到函数形参数量
- apply方法:调用函数,同时指定函数中的this指向,参数以数组传递
  ```js
  function a(a,b){
      console.log(this.name,this.age);
  }
  var user1 = {
      name:"asd"
      age:123
  }
  a.apply(user1,[1,2]);
  // 参数以数组传递
  ```
- call方法:调用函数,同时指定函数中的this逐项,参数以列表传递
  ```js
  function b(a,b){
      console.log(this.name,this.age);
  }
  var user2 = {
      name:"asd"
      age:123456
  }
  b.call(user2,1,2);
  // 参数以列表传递
  ```

通常,可以利用apply、call方法,将某个伪数组转换为真数组

```js
function test(){
     console.log(arguments);
    //  将arguments转换为真数组
     var newArr = [].slice.call(arguments);
     // 选中 数组项  slice也为函数 函数内有this 将函数slice 的this指向转换为arguments 
     //再将数组声明变量
     console.log(newArr);
     //输出转换的真数组
}
test(1,2,3,4,5,6);
```

- bind方法:得到一个新函数,该函数的this始终指向指定的值
  ```js
  function a(a,b){
      console.log(this.name,this.age);
      console.log(a,b);

      var user1 = {
          name:"asd",
          age:123
      }
  }
  var newFunc = a.bind(user1,1,2); //bind绑定 不会调用
  //返回一个新函数newFunc  无论用什么方式调用  它的this指向不变
  newFunc();
  ```