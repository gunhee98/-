function solution(s) {
    var answer = true;
   
    if(s.length===4||s.length===6){
        for(let i of s){
            if(isNaN(i)){
                answer=false;
                break;
            }
        }
    }else{
        answer=false;
    }
    return answer;
}