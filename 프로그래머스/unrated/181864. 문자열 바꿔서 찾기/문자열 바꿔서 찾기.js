function solution(myString, pat) {
    var answer = 0;
    const arr=myString.split("");
    for(let i in arr){
       if(arr[i]==='A'){
           arr.splice(i,1,"B");
       } else{
           arr.splice(i,1,"A");
       }
    }
    if(arr.join('').includes(pat)){
        answer=1;
    }else{
        answer=0;
    }
    return answer;
}