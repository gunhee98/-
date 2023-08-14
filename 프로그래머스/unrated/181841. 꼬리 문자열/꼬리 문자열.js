function solution(str_list, ex) {
    var answer = '';
    const arr=str_list.filter(item=>!item.includes(ex));
  
    answer=arr.join("");
    return answer;
}