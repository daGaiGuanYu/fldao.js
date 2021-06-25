let inited = false
const reg = {}

module.exports = function(name = 'cst') {
  if(inited)
    throw Error('不可重复初始化 constant')
  inited = true
  
  globalThis[name] = new Proxy({}, {
    get(tar, name) {
      if(reg[name])
        return tar[name]
      else
        throw Error('未定义的常量：' + name)
    },
    set(tar, name, value) {
      if(reg[name])
        throw Error(`不可重复定义常量：${name}（目标值：${value}）`)
      reg[name] = true
      return tar[name] = value
    }
  })
}

