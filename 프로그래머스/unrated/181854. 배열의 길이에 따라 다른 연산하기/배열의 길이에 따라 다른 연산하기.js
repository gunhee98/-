function solution(arr, n) {
    var answer = [];
    if(arr.length%2===0){
        arr.forEach((item,index)=>{
            
            if(index%2===1){
                answer.push(item+n);
            }else{
                answer.push(item);
            }
        })
    }else{
        arr.forEach((item,index)=>{
             if(index%2===1){
                answer.push(item);
            }else{
                answer.push(item+n);
            }
        })
    }
    return answer;
}