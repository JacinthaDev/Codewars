function high(x){
    let arr = x.split(' ')
    let arr2 = []
    let count = 0
    for (item of arr){
        for (letter of item){
        count += letter.charCodeAt(0) -96
    }
        arr2.push(count)
        count=0
    }
    
    let highest = Math.max(...arr2)
    
    let index = arr2.indexOf(highest)
    return arr[index]
}