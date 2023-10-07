function DNAStrand(dna){
    //your code here
    
   let dnaArray = dna.split('')
   let dnaArray2= ''
   
  
   for (let i = 0; i < dnaArray.length; i++){
     
     
     if (dnaArray[i] === "A"){
       
       dnaArray2 += 'T'
       
     } else if (dnaArray[i] === "T"){
       
       dnaArray2 += 'A'
       
     } else if (dnaArray[i] === "G"){
       
       dnaArray2 += "C"
       
     } else if (dnaArray[i] === "C"){
       
       dnaArray2 += "G"
       
     }
  
   }
     return dnaArray2
  
  }
  
  