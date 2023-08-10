function solution(babbling) {
    var answer = 0;
    const arr=['aya','ye','woo','ma'];
    for(let i of babbling){
       for(let j of arr ){
          i= i.replace(j,"#")
            }
        if(i.replace(/#/g,"").length===0){
            answer+=1;
        }
       
    }
    
    return answer;
}