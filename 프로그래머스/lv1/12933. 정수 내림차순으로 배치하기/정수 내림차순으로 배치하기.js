function solution(n) {
    var answer = 0;
     let arr=String(n).split("").map(i=>parseInt(i));
    arr.sort((a,b)=>b-a);
   answer= parseInt(arr.join(""));

    return answer;
}