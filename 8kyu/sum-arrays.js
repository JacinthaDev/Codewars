// Sum Numbers
function sum (numbers) {
    "use strict";
  
  if (numbers.length === 0){
    return 0
  } else if (numbers.length !== 0){
      let total = 0
    for (let i = 0; i< numbers.length; i++){
      total += numbers[i]
      }
    return total
   }
};