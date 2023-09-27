function solution(num_list) {
    var answer = [];
    num_list.sort((a,b)=>{
          if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
 
  return 0;

    })
    answer=num_list.slice(0,5);
    
    return answer;
}