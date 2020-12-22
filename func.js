exports.check2go = function(){
  let cb = Array.prototype.pop.call(arguments)
  for(let arg of arguments)
    if(!arg) return

  return cb(...arguments)
}

const isNil = exports.isNil = function(target, allowed) {
  return (allowed.indexOf(target) == -1) && !target
}

exports.parsePugStr = function(str){
  if(isNil(str) || str.constructor != String)
    throw Error('需要一个字符串')
  
  let idFlag = str.indexOf('#')
  if(idFlag == -1){
    let [tagName, ...classList] = str.split('.')
    return { tagName, classList }
  }

  let [tagName, idAndClass] = str.split('#')
  let [id, ...classList] = idAndClass.split('.')
  return { tagName, id, classList }
}