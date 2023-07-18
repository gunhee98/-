function solution(s){
    var answer = true;
    let p=0;
    let y=0;
    let str=s.toLowerCase();
    str.split('').forEach((i)=>{
       if(i==='p'){
           p+=1;
       }
        if(i==='y'){
            y+=1;
        }
    })
    answer=(y===p);
    return answer;
}