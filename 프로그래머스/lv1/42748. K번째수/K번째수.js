function solution(array, commands) {
    var answer = [];
   for(let i=0;i<commands.length;i++){
       let arr=commands[i];
       let arr1=[];
       arr1=array.slice(arr[0]-1,arr[1]).sort((a,b)=>a-b);
       answer.push(arr1[arr[2]-1]);
   }
    
    return answer;
}