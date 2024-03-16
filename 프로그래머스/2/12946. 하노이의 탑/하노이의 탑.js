function solution(n) {
    var answer = [];
    function hanoi(n,start,end,temp){
        if(n===1){
            answer.push([start,end]);
            return 1;
        }
        hanoi(n-1,start,temp,end);
        answer.push([start,end]);
        hanoi(n-1,temp,end,start);
    }
    hanoi(n,1,3,2);
    return answer;
}