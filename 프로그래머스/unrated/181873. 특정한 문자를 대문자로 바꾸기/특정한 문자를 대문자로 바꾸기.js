function solution(my_string, alp) {
    var answer = '';
    var regexAllCase = new RegExp(alp, "g")
   answer=my_string.replace(regexAllCase,alp.toUpperCase());
   
    
    return answer;
}