function solution(num) {
    var answer = 0;
    if(num===1){
        return 0;
    }
    while(true){
        if(answer===500){
            return -1;
        }
        if(num===1){
            break;
        }else{
        if(num%2===0) {
            num/=2;
            answer+=1;
        }
            else{
                num=num*3+1;
                answer+=1;
            }
        }
    }
    return answer;
}