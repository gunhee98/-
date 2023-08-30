function solution(num_list) {
    var answer = 0;
    let odd=0;
    let even=0;
    num_list.forEach((item,index)=>{
        if((index+1)%2===0){
            even+=item;
        }else{
            odd+=item;
        }
    })
                     if(even>=odd){
        answer=even;
    }else{
        answer=odd;
    }
    return answer;
}