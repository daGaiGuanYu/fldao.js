const target = require('../src/func/make-swch')

const result = target(function(ctx, inner) {
  if(ctx != 1)
    return inner(ctx)
  else
    return 1
}, function(ctx, inner) {
  if(ctx != 2)
    return inner(ctx)
  else
    return 2
}, function(ctx, inner) {
  if(ctx != 3)
    return inner(ctx)
  else
    return 3
})

console.log(result(3))