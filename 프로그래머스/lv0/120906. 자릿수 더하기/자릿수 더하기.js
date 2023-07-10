function solution(n) {
    let answer = 0;
    n=String(n);
    for(let i of n){
        answer+=parseInt(i);
    }
   
    return answer;
}