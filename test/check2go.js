const check2go = require('../check2go')

let a = 1, b

let result = check2go(a, a => {
  console.log(a)
  return 3
})
console.log(result)

check2go(b, b => {
  console.log(b)
})