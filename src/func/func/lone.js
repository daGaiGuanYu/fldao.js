module.exports = function(cb) {
  let loading = null
  return function() {
    return loading || (loading =
      cb().finally(function(){
        loading = null
      })
    )
  }
}