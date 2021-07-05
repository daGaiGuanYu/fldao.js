module.exports = function(msg, job) {
  let done = false
  return function() {
    if(done)
      throw Error(msg)
    done = true
    return job(...arguments)
  }
}