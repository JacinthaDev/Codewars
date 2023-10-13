function findAverage(array) {
    // your code here
    let total =0
    if (array.length === 0){
      return 0
    } else if (array !== []){
      for (let element of array){
        total += element
      }
      total /= array.length
    }
    return total;
  }