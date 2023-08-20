function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a, b) => b-a); 
  
    const box=Math.floor(score.length/m);
    for(let i=1; i<box+1;i++){
        answer+=score[i*m-1]*m;
    }
    return answer;
}