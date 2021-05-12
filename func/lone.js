module.exports = function(cb) {
  let loading = null
  return function() {
    return loading || (loading = cb().then(function() {
      loading = null
      return Promise.resolve(...arguments)
    }))
  }
}