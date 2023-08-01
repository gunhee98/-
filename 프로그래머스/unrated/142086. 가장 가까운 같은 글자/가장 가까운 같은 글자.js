function solution(s) {
    var answer = [];
    let obj={};
    let arr=[];
  for(let i in s){
      
 
      if(arr.includes(s[i])){
          answer.push(i- (obj[s[i]]));
          obj[s[i]]=i;
      }else{
          answer.push(-1);
          arr.push(s[i]);
          obj[s[i]]=i;
      }
  }

    return answer;
}