function solution(X, Y) {
    var answer = '';
    X=X.split("");
    Y=Y.split("");
   for(let i=0;i<10;i++){
       const xArr=X.filter(e=>Number(e)===i).length;
       const yArr=Y.filter(e=>Number(e)===i).length;
       answer+=String(i).repeat(Math.min(xArr,yArr));
   }
    if(answer==="")return "-1";
    if(Number(answer)===0) return "0";
    return answer.split("").sort((a,b)=>Number(b)-Number(a)).join("");
}