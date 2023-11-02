function getMiddle(string) {
    let middle = Math.floor(string.length / 2)
    if (string.length % 2 === 0) {
      return string.substring(middle -1, middle+1)
    }
    else{
      return string.substring(middle, middle + 1)
    }
  }