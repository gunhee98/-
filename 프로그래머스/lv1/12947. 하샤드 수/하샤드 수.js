function solution(x) {
    var answer = true;
    let str=String(x);
    let sum=0;
    for(let i of str){
        sum+=parseInt(i);
    }
    answer=(x%sum===0)
    return answer;
}