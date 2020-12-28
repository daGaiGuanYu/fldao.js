// 模仿 react 的 useState、useEffect

export default class State {
  constructor(value){
    this.value = value
    this.effectList = []
  }
  set(v){
    this.value = v
    this.effectList.forEach(cb => cb(v))
  }
  addEffect(cb){
    this.effectList.push(cb)
  }
}