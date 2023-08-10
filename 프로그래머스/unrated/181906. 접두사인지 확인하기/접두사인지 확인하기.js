function solution(my_string, is_prefix) {
    var answer = 0;
    const arr=[];
    for(let i=0;i<my_string.length;i++){
        arr.push(my_string.slice(0,i+1));
    }
    if(arr.includes(is_prefix)){
        answer=1;
    }else{
        answer=0;
    }
    return answer;
}