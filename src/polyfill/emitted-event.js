module.exports = class extends require('events') {
  emitted = {}
  on(name, handler) {
    if(this.emitted[name])
      handler(...this.emitted[name])
    return super.on(...arguments)
  }
  emit(name, ...args) {
    this.emitted[name] = args
    return super.emit(...arguments)
  }
}