function reduce(fraction) {
    //simplify me!
    let newArray=[]
    
    for(let i= Math.min(...fraction);; i--){
          
        if (fraction[0] % i ===0 && fraction[1] % i ===0){ 
  
          newArray.push((fraction[0]/i),(fraction[1]/i))
          break
        }
      }
    return newArray
  }