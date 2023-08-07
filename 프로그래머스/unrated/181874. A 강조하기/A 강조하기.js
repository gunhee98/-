function solution(myString) {
    var answer = '';
    answer=myString.split("");
    answer.forEach((v,i)=>{
        if(v==="a"){
            answer.splice(i,1,"A");
        }
        if(v!=='A'&& v!=='a'){
            answer.splice(i,1,v.toLowerCase());
        }
    })
    
    return answer.join("");
}