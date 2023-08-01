function solution(a, b, n) {
    var answer = 0;
    let 콜라=0;
    let 빈병=n;
    
    while(true){
         if(빈병<a){ break};
        콜라=Math.floor(빈병/a)*b;
        빈병=(빈병%a)+콜라;
        answer+=콜라;
        
    }
    return answer;
}