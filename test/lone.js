const lone = require('../func/lone')

let main1 = lone(function(){
  console.log('执行任务')
  return new Promise( res => {
    setTimeout(res, 1000, '1 ' + new Date().getTime())
  })
})

main1().then(console.log)
main1().then(console.log)
setTimeout(function(){
  main1().then(console.log)
  main1().then(console.log)
}, 500)
setTimeout(function(){
  main1().then(console.log)
  main1().then(console.log)
}, 1000)

let main2 = lone(function(){
  console.log('执行任务2')
  return new Promise( res => {
    setTimeout(res, 1000, '2 ' + new Date().getTime())
  })
})

main2().then(console.log)
main2().then(console.log)
setTimeout(function(){
  main2().then(console.log)
  main2().then(console.log)
}, 500)
setTimeout(function(){
  main2().then(console.log)
  main2().then(console.log)
}, 1000)
