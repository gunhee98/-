function solution(s) {
    var answer = '';
  
    answer=Math.min(...s.split(" "))+" "+Math.max(...s.split(" "));
 
    return answer;
}                    