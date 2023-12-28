function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>b-a);
    const len=citations.length;
    for(let i=1;i<=len;i++){
        if(i<=citations[i-1])answer++;
    }
    return answer;
}