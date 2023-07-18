function solution(n) {
    var answer = [];
    while(true){
        if(n<10){
            answer.push(n);
            break;}
        answer.push(n%10);
        n=Math.floor(n/10);
    }
    return answer;
}