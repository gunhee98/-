function solution(strArr) {
    var answer = 0
    answer=strArr.map((item,index)=>{
      if(index%2===0){
          return item.toLowerCase();
      }else{
          return item.toUpperCase();
      }
    })
    return answer;
}