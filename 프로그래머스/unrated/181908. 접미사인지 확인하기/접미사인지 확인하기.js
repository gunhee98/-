function solution(my_string, is_suffix) {
    var answer = 0;
    let arr=[];
    for(let i=0;i<my_string.length;i++){
        arr.push(my_string.slice(i));       
    }
    if(arr.includes(is_suffix)){
        answer=1;
    }else{
        answer=0;
    }
    return answer;
}