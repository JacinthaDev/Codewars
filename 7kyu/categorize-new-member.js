function openOrSenior(data){
    let arr = []
    data.forEach(x => { x[0] >= 55 && x[1] > 7 ? arr.push('Senior') : arr.push('Open') })
    return arr
}