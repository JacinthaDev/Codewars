let sum=0
function digits(num){
  num= String(num)
  let array=[]
  
  while (num.length>=2){
  for (let i = 0; i< num.length -1; i++){
   sum = Number(num[0]) + Number(num[i+1])
   array.push(sum)
   
  }
  
    num = num.slice(1)
    
  }
  return array
}