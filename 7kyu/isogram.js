// //will we only get strings? yes
// //should we pay attention to letter case? no
// //examples
// //isIsogram "Dermatoglyphics" = true
// //isIsogram "moose" = false
// //isIsogram "aba" = false
// //make empty obj
// //iterate thru the string and push letters into objects
// //at the end check if if the count of any number>1 then no 
// //return true or false

// function isIsogram(str){
//   let obj = {}
//   let str2= str.toLowerCase().split('')
//   str2.forEach(letter =>{
//     if (obj[letter]){
//       obj[letter] ++
//     } else{
//       obj[letter] = 1
//     } 
//   })

//   let values = Object.values(obj)
//   if (values.includes(2)){
//     return false
//   }else{
//     return true
//   }
// }


function isIsogram(str){
    return new Set(str.toLowerCase()).size === str.length
}

