function solution(arr, divisor) {
    var answer = [];
    arr.forEach((i)=>{
       if(i%divisor===0){
           answer.push(i);
       } 
    })
    answer.sort((a,b)=>a-b);
   
    return answer.length?answer:[-1];
}