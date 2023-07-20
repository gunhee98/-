function solution(absolutes, signs) {
    var answer =0;
    signs.forEach((i,index)=>{
      
           
        if(!i){
            absolutes[index]=-absolutes[index]; 
        }
       answer+=absolutes[index];
    })
    return answer;
}