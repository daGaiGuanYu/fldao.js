const Evented = require('../src/polyfill/emitted-event')

const e = new Evented()
e.on('test', function(){
  console.log(arguments)
})
e.emit('test', 1, 2, 3)
e.on('test', function(){
  console.log(arguments)
})