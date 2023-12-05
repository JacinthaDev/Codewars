//our parameter will always be a string
//returning a string + ordinal 
//use the slice method to grab the first 2 numbers in the string slice (0,2)
//then convert to a number to add 1
//convert back to string and concatenate ordinal
// if 0 or 3-9 it's th
//if 1 st
//if 2 nd
//if 12 th

function whatCentury(year) {
    let century = Math.floor((year -1) / 100) + 1
    let suffix = "th"
    if (century % 10 === 1 && century % 100 !== 11) {
        suffix = "st"
    } else if (century % 10 === 2 && century % 100 !== 12) {
        suffix = "nd"
    } else if (century % 10 === 3 && century % 100 !== 13) {
        suffix = "rd"
    }
    return `${century}${suffix}`
}