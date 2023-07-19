function solution(arr) {
    var answer = [];
    let min=arr[0];
    arr.forEach((i)=>{
        if(i<min){ min=i};
    })
    answer=arr.filter(i=>i!==min);
    
    return answer.length?answer:[-1];
}