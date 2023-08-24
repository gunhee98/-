function solution(a, b) {
    var answer = 0;
    
    if(parseInt(String(a)+b)>=parseInt(String(b)+a)){
        answer=parseInt(String(a)+b);
    }else{
        answer=parseInt(String(b)+a);
    }
    return answer;
}