function solution(str1, str2) {
    var answer = 0;
    
    if(str2===str2.replace(str1,"")){
        answer=0;
    }else{
        answer=1;
    }
    return answer;
}