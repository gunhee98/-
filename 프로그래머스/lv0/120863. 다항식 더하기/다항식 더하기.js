function solution(polynomial) {
    var answer = [];
    let numX=0;
    let num=0;
    const polynomialArr=polynomial.split(" + ");
    console.log(polynomialArr);
    polynomialArr.forEach(item=>{
        if(item.includes("x")){
            numX+= parseInt(item.replace("x","")) || 1;
        }else{
           
            num+=parseInt(item);
        }
    })
  if(numX)  answer.push(`${numX===1?"":numX}x`);
   if(num) answer.push(num);
    
        return answer.join(" + ");
}