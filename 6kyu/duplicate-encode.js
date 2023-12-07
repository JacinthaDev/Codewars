function duplicateEncode(string){
    let newStr= ''
    let str = string.toLowerCase()
    for(let char of str){
        if (str.indexOf(char) === str.lastIndexOf(char)){
        newStr+= '('
        } else{
        newStr += ')'
        }  
    } 
    return newStr
}