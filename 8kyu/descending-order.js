function descendingOrder(n){
    //...
    let arr = Array.from(n.toString())
    arr.sort((a,b) => b - a)
    let array= arr.map((number) => Number(number))
    console.log(array)
    return Number(array.join(""))
    
  }
  