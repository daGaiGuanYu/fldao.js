// 向函数添加入参（this 丢失）
Function.prototype.new = function(){
  return this.bind(null, ...arguments)
}