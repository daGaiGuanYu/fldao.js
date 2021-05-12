const lone = require('../func/lone')

let main1 = lone(function(){
  console.log('执行任务')
  return new Promise( res => {
    setTimeout(res, 1000)
  })
})
let main2 = lone(function(){
  console.log('执行任务2')
  return new Promise( res => {
    setTimeout(res, 1000)
  })
})

function sleep(){
  return new Promise( res => {
    setTimeout(res, 1)
  })
}

async function go() {
  while(true) {
    main1()
    main2()
    await sleep()
  }
}

go()
setInterval(() => {
  console.log(1)
}, 1000)