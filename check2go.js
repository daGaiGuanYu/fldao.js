module.exports = function(){
  let cb = Array.prototype.pop.call(arguments)
  for(let arg of arguments)
    if(!arg) return

  return cb(...arguments)
}