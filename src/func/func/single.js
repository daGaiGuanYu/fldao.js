module.exports = function(createTarget) {
  const target = createTarget()
  return () => target
}
