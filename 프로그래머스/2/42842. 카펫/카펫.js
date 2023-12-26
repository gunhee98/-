function solution(brown, yellow) {
    var answer = [];
    let a=0;
    let b=0;
    for(let i=3;i<=Math.floor(brown/2)-1;i++){
        a=i;
        b=Math.floor(brown/2)-a+2;
        if((a-2)*(b-2)===yellow){
            break;
        }
    }
    if(a>=b){
        answer=[a,b];
    }else{
        answer=[b,a];
    }
    return answer;
}