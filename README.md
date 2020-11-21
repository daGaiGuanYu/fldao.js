# fldao.js
> Feng Li de DAO

##### 锋利的刀
+ 方便开快递
+ 容易割到手
+ 而且没必要
+ 但是我想要

# 干什么用的？
使代码更好写、更好看

# 使用
##### 安装
```bash
npm install fldao
```

##### check2go
> 可有可无的语义性能提升
> 无元编程

场景：
你要频繁操作两个对象的 **某个** 属性  
但是在这之前，你要先检查这俩对象是否存在，以及他们是否有这俩属性  

使用前：
```js
function(person, school){
  if(person && person.name && school && school.address){
    let pName = person.name
    let sName = person.name
    console.log(pName)
    console.log(sName)
    console.log(pName + sName)
    // ...
  }
}
```

使用后：
```js
const check2go = require('fldao/check2go')

function(person){
  check2go(person && person.name, school && school.name, (pName, sName) => {
    console.log(pName)
    console.log(sName)
    console.log(pName + sName)
    // ...
  })
}
```

##### asCallback
> 元编程

使用前：
```js
beforeShow( () => {
  go('gogo')
})
```
使用后：
```js
beforeShow(go.asCallback('gogo'))
```