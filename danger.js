// 向函数添加入参
Function.prototype.asCB = function(){
  return this.bind(null, ...arguments)
}