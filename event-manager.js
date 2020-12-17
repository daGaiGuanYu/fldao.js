// 每个实例，独占各方法，虽然内存占用大，但是写起来好看，用起来不需要考虑 this

export default function () {
  const allEvt = {}

  this.on = function(eName, handler){
    if(allEvt[eName])
      allEvt[eName].push(handler)
    else
      allEvt[eName] = [handler]
  }

  const emit = this.emit = function(eName, ctx){ 
    const hList = allEvt[eName]
    if(hList)
      hList.forEach(function(h){
        h(ctx)
      })
  }

  // 捕获别的对象的事件，当作自己的事件并触发
  this.catchAndEmit = function(mng, eName){
    mng.on(eName, emit.new(eName))
  }

  this.emitAsync = async function(eName, ctx){
    const hList = allEvt[eName]
    if(!hList) return
    
    return Promise.all(
      hList.map( h => h(ctx) )
    )
  }
}
