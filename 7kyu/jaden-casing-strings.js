//always a string, never anything than spaces and letters
//returning a new string capitalized
//"How Can Mirrors Be Real If Our Eyes Aren't Real"

//split the string so that each word is it's own index in the array
//map thru the array and access the first letter of each word at index 0 
//then add the rest of the word to it
// toUppercase()to capitalize the first letter
//join back by using join method with space as delimiter

String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
};