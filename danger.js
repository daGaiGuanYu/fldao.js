// 向函数添加入参
Function.prototype.new = function(){
  return this.bind(null, ...arguments)
}