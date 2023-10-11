function positiveSum(arr) {
    let total=0
    for(let number of arr){
      
      if (number> 0){
        total+= number
        
      } else {
        total +=0
      }
    }
    return total
  }