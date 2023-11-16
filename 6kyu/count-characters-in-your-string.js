function count(string) {
    const obj = {}
    string.split('').forEach(x =>{
      if (obj[x]) {
            obj[x] += 1
        } else {
            obj[x] = 1
        }
    })
    return obj
  }