function solution(n, words) {
    var answer = [0,0];
    let stack=[];
    let count =0;
    let num=0;
    for(let i=0; i<words.length;i++){
         if(stack.length === 0){
            stack.push(words[i]);
            continue;
        }
        const pre = stack[stack.length - 1];
        const preWord = pre[pre.length - 1];
        const post = words[i];
        const postWord = post[0];
        if(preWord !== postWord||stack.includes(words[i])){
           count=Math.ceil((i+1)/n);
            num=(i+1)%n===0?n:(i+1)%n;
            answer[0]=num;
            answer[1]=count;
            break;
        }else{
            stack.push(words[i]);
        }
       
    }
    
    return answer;
}