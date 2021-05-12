async function main(){
  const data = await new Promise( res => {
    setTimeout(() => {
      res(1, 2, 3)
    }, 100)
  })
  console.log(data)
}

main()