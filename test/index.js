new Promise( res => {
  setTimeout(res, 1000, 2)
})
  .finally(() => {
    console.log('f')
  })
  .then(console.log)