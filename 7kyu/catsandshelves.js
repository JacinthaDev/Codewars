function solution(start, finish) 
{
  let difference = finish - start
  return Math.floor(difference /3 )+ difference % 3
}