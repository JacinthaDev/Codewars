function abbrevName(name){

    // code away
  
  let newName = name.toUpperCase()
  let nameArray = newName.split(' ')
  console.log(nameArray)
  firstInitial = nameArray[0].substring(0,1)
  lastInitial = nameArray[1].substring(0,1)
  
  return `${firstInitial}.${lastInitial}`
  


}