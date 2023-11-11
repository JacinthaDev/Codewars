function alphabetPosition(text) {
    let arr = Array.from(text.toLowerCase())
    let arr2=[]
    arr.forEach(x => {
        if (/^[A-Za-z]+$/.test(x)){//checks for if the value is a letter
        arr2.push(x.charCodeAt(0) - 96) //char code at 0 index of x. -96 bc As charcode is 97
        } 
    }) 
    return arr2.join(' ')
    }