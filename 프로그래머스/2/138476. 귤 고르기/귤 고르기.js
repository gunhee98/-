function solution(k, tangerine) {
    var answer = 0;
    const freq=new Map();
   tangerine.forEach((t)=>freq.set(t,(freq.get(t)||0)+1));
    const counts=Array.from(freq.values()).sort((a,b)=>b-a);
    while(k>0){
        k-=counts.shift();
        answer++;
    }
    return answer;
}