function solution(n, arr1, arr2) {
    var answer = [];
    let arr=[];
    
    for(let i=0; i<n;i++){
        arr.push((arr1[i]|arr2[i]).toString(2).padStart(n,0));
        }
    for(let i of arr){
        answer.push(i
                    .split("")
                    .map((i)=>(i==="0"?(item = " ") : (item = "#")))
                    .join("")
                   )
    }
    
    return answer;
}