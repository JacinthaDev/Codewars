function getCount(str) {
    let string = str.toLowerCase()
    let stringArray = string.split("")
    let number =0
    for(let i = 0; i < stringArray.length; i++){
      if (stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o'|| stringArray[i] === 'u'){
        
        number +=1
      }
    }
    return number
  }
  