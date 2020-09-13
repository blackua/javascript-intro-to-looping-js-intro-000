function forLoop(array){
  for (let i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i < 2 ? '' : 's'}.`)
  }
  return array
}

function whileLoop(n){
  while (n >= -1) {
    if (n >= 0) {
      console.log(n)
    } else if (n < 0) {
      console.log('done')
    }
  n -= 1
  }
}
