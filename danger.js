// 向函数添加入参
Function.prototype.asCallback = function(){
  return this.bind(null, ...arguments)
}