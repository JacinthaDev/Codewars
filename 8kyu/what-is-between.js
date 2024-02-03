// parameters will can be positive or negatvie numbers. Only numbers.. no funny biz
//a will always be less than b
//returning an array of numbers where a is at index 0 and b is at the last index
//between(1, 4), between(-2, 2)
//initialize an array that contains [a]
//use a while loop where we start at a+1 and loop until i <=b
//let i = a + 1
//while (i > a && i<=b ){
//arr.push(i)
//i ++
//}

function between(a, b) {
    let arr  = [a]
    let i = a+1
    while (i > a && i <= b ){
        arr.push(i)
        i++
    }
    return arr
}