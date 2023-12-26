function solution(n) {
    var answer = 0;
    const stack=[];
    for(let i=0;i<=n;i++){
        if(i<2){
            
            stack.push(i);
        }else{
        stack.push((stack[i-1]+stack[i-2])%1234567);}
    }
    answer=stack[n];
    return answer;
}