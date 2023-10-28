function XO(str) {
    let xNumber = 0
    let oNumber = 0
    for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
        xNumber += 1
        } else if (str[i].toLowerCase() === 'o') {
        oNumber += 1
        }
    }
    return xNumber === oNumber
}