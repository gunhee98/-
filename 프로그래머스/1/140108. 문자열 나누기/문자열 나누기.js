function solution(s) {
    var answer = 0;
    let stack=[];
    for(let i=0;i<s.length;i++){
        stack.push(s[i]);
        const same=stack.filter(e=>e===stack[0]);
        const notSame=stack.filter(e=>e!==stack[0]);
        if(same.length===notSame.length){
            answer++;
            stack=[];
        }
    }
    if(stack.length!==0){
        answer++;
    }
    return answer;
}