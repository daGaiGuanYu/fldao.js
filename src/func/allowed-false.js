module.exports = function(target, allowed) {
  return (allowed.indexOf(target) == -1) && !target
}