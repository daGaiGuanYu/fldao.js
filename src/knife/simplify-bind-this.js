// 简化写法 a.haha = a.haha.bind(a)
// => a.self.haha
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