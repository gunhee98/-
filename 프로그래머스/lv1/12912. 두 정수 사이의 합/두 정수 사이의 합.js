function solution(a, b) {
    var answer = 0;
    if(a<b){
        while(true){
            if(a===b){
                answer+=a;
                break;
            }
            answer+=a;
            a+=1;
            }
    }else if(a===b){
        answer=a;
    }else{
        while(true){
        if(a===b){
                answer+=a;
                break;
            }
            answer+=a;
            a-=1;
        }
    }
    return answer;
}