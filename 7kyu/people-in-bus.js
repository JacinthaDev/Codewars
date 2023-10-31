var number = function(busStops){
    let people = 0
    busStops.forEach(element => {
      people += (element[0] -element[1])
    })
    return people
  }