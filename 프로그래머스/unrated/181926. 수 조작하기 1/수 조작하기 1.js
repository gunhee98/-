function solution(n, control) {
    var answer = 0;
    for(let i of control){
    switch(i){
        case "w":
            n+=1;
            break;
        
        case "s":
            n-=1;
            break;
        
        case "d":
            n+=10;
            break;
        
        case "a":
            n-=10;
            break;
        
    }
    }
    answer=n;
    return answer;
}