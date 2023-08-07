function solution(num_list) {
    var answer = 0;
    let even=[];
    let odd=[];
    num_list.forEach((v)=>{
        if(v%2===0){
            even.push(v);
        }else{
            odd.push(v);
        }
    })
    answer=parseInt(even.join(''))+parseInt(odd.join(''));
    return answer;
}