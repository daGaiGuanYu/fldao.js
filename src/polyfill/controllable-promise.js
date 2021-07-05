module.exports = class extends Promise {
  constructor(cb = function() {}) {
    var resolve, reject
    super(function(res, rej){
      resolve = res
      reject = rej
      return cb(res, rej)
    })
    this.resolve = resolve
    this.reject = reject
  }
}