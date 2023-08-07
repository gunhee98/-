function solution(numbers, n) {
    var answer = 0;
    
    numbers.forEach(v=>{
        if(answer<=n) answer+=v;
    })
    return answer;
}