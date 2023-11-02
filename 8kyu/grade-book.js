function getGrade (s1, s2, s3) {
    let grade
    let score = (s1 +s2 +s3) /3
    if (score>= 90){
      grade = "A"
    } else if (score>= 80){
      grade = "B"
    } else if(score>= 70){
      grade = "C"
    } else if (score>= 60){
      grade = "D"
    } else if (score>= 0){
      grade = "F"
    }
    return grade
  }