function digitize(n) {
    //code here
    let z = []
    let nString = n.toString()
    let nArray = nString.split('')
    let reversedArray = nArray.reverse()
    
    for (let i = 0; i < reversedArray.length; i++){
      z.push(Number(reversedArray[i]))  
    }
    return z
  }
  