function solution(n) {
    var answer = [];
    for(let i=0;i<=n;i++){
        answer.push(i);
    }
    answer=answer.filter(i=>i%2!==0)
    return answer;
}