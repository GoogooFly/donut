# 动态样式绑定 {#bindStyle}

## class 动态绑定

### 字符串写法

适用于样式的类名不确定，需要动态绑定

```vue
<template>
  <div>
    <button :class="classProp">按钮</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            classProp: "home"
        }
    }
}

</script>

<style>
.home {
    background-color: red;
}
</style>
```

### 数组写法

适用于绑定的样式不确定、名字也不确定

```vue
<template>
  <div>
    <button :class="classProp">按钮</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            classProp: ["home", "main"]
        }
    }
}

</script>

<style>
.home {
    background-color: red;
}
.main {
    color: blue;
}
</style>
```

### 对象写法

适用于绑定的样式个数确定、名字也确定，但需要动态决定是否使用

```vue
<template>
  <div>
    <button :class="classProp">按钮</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            classProp: {
                home: false,
                main: false
            }
        }
    }
}

</script>

<style>
.home {
    background-color: red;
}
.main {
    color: blue;
}
</style>
```

## style 动态绑定

### 对象写法

```vue
<template>
  <div>
    <button :style="styleProp">按钮</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            styleProp: {
                color: "red",
                backgroundColor: "blue"
            }
        }
    }
}

</script>
```

### 数组写法

```vue
<template>
  <div>
    <button :style="styleProp">按钮</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            styleProp: [
              {
                color: "red",
                backgroundColor: "blue"
              },
              {
                width: "100px",
                height: "100px"
              }
            ]
        }
    }
}

</script>
```