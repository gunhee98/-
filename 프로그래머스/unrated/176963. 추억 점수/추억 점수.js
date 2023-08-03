function solution(name, yearning, photo) {
    var answer = [];
    const obj={};
    for(let i=0;i<name.length;i++){
        obj[name[i]]=yearning[i];
    }
    
   for(let i=0;i<photo.length;i++){
       let sum=0;
       for(let j=0;j<photo[i].length;j++){
           let name=photo[i][j];
         if(obj[name]){
             sum+=obj[name];
         }
           
           }
          answer.push(sum);
       }
     
     return answer;
   }
  
