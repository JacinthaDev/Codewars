function solution(string) {
    let str = string.split('')
    for(let i=0; i < str.length; i++){
        
        if(str[i] >= 'A' && str[i] <= 'Z'){
                    
            str[i] = " " +str[i]
        }
        
    }
    
    return str.join('')
}