function solution(arr, k) {
    var answer = [];
   answer= arr.map((i)=>{
        if(k%2===0){
           return i+k;
        }else{
            return i*k;
        }
    })
    return answer;
}