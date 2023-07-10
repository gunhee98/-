function solution(rsp) {
    var answer = '';
    const oj={
        2:"0",
        0:"5",
        5:"2"
        };
    for(let i in rsp){
        answer+=oj[rsp[i]];
    }
    return answer;
}