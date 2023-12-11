//array of integers, no floats, no funny business
//returning a single number
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4,
//Only ever one number that occurs an odd amount of times in the array

// loop through  array
// make a variable that holds the result of a filter that looks for all numbers in the
//array that match the current number we are on
//if the length of that filteredArray is odd, then return filteredArray[0]
//The array is bound to have at least one number so that's why we return at index 0

function findOdd(array) {
    for(let i = 0; i <= array.length-1; i++){
      let filteredArray = array.filter((number) => number === array[i])
        if (filteredArray.length % 2 !== 0){
          return filteredArray[0]
      }
    }
  }