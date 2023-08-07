function solution(k, score) {
    var answer = [];
    const arr=[];
    score.forEach((v,i)=>{
        arr.push(v);
        arr.sort((a,b)=>b-a);
        if(i<k){
            answer.push(arr[i]);
        }else{
            answer.push(arr[k-1]);
        }
    })
    return answer;
}