function solution(s) {
    var answer ="";
    let result=s.split(" ");
    
   let result1=result.map(word=>word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase())
    answer=result1.join(" ");
    return answer;
}