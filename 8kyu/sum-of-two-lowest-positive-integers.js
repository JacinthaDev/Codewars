function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let min = Math.min(...numbers)
    let index = numbers.indexOf(min)
    numbers.splice(index,1)
    min+= Math.min(...numbers)
    
    return min
    
}