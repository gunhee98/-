function solution(my_strings, parts) {
    var answer = '';
    const myStringPart=[];
    my_strings.forEach((item,index)=>{
       myStringPart.push(item.slice(parts[index][0],parts[index][1]+1));
    })
    answer=myStringPart.join("");
    return answer;
}