function solution(num_list) {
    var answer = 0;
    let add=0;
    let mul=1;
    for(let i of num_list){
        add+=i;
        mul*=i;
    }
    if(add**2>mul){
        answer=1;
        
    }else{
        answer=0;
    }
    return answer;
}