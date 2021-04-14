// ！当既需要绑定 this，又需要追加参数，别使用下面这俩！多写几行 => 代码可读性 up up
// 向函数添加入参
Function.prototype.new = function(){
  // if the thisArg is null or undefined, the this of the executing scope is treated as the thisArg for the new function.
  return this.bind(null, ...arguments)
}

// 简化写法 a.haha = a.haha.bind(a)
Object.defineProperty(Object.prototype, 'self', {
  get(){
    return new Proxy(this, {
      get(that, key){
        if(that[key] instanceof Function)
          return that[key].bind(that)
      }
    })
  }
})