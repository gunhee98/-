function solution(n) {
    var answer = 0;
    let num=n;
    let arr=[];
    while(true){
        
        if(num<3){
            arr=[num,...arr];
            break;
        }
        arr=[num%3,...arr];
        num=Math.floor(num/3);

    }
    for(let i=0;i<arr.length;i++){
        answer+=arr[i]*Math.pow(3,i);
    }
    return answer;
}