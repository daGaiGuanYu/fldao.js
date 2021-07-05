module.exports = require('events') || class {
  map = new Proxy({}, {
    get(target, key){
      return target[key] = target[key] || []
    }
  })
  
  on (eName, handler){
    this.map[eName].push(handler)
  }

  emit (eName, evt){
    return this.map[eName].map( h => h(evt) )
  }
}