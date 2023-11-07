function longest(s1, s2) {
    let arr2=[], arr = Array.from(s1).concat(Array.from(s2))
    arr.sort()
    arr.forEach(x => {
      if (!arr2.includes(x)){
        arr2.push(x)
      }
    })
    
    return arr2.join('')
}