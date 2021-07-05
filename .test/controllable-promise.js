const P = require('../src/polyfill/controllable-promise')

async function go(a) {
  await a
  console.log('after')
}

let a = new P()
go(a)
console.log('before')
setTimeout(() => {
  console.log('wait')
  a.resolve()
}, 3000)