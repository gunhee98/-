/*function solution(arr) {
    var answer = [];
    let min=arr[0];
    arr.forEach((i)=>{
        if(i<min){ min=i};
    })
    answer=arr.filter(i=>i!==min);
    
    return answer.length?answer:[-1];
}
*/

2
3
4
5
6
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}