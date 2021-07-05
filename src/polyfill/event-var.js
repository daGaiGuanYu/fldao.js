// 保存一个数据，变化时，触发事件
const Events = require('./events')

export default class extends Events {
  constructor(value){
    this.__value = value
  }
  set(v) {
    this.emit('before')
    this.__value = v
    this.emit('after')
  }
  get() {
    return this.__value
  }
  beforeChange(cb) {
    this.on('before', cb)
  }
  afterChange(cb) {
    this.on('after', cb)
  }
}