function solution(n, m) {
    var answer = [];
    let gCD=0;
    let lCM=0;
    let num=n>m?n:m;
   for(let i=1;i<=num;i++){
       if(n%i===0&&m%i===0){
           gCD=i;
       }
   }
    lCM=(n*m)/gCD;
    answer=[gCD,lCM];
    return answer;
}