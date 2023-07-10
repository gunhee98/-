function solution(my_string) {
    let answer = my_string; 
    const gather=['a','e','i','o','u']; 
   
    for(let i of gather){
        answer=answer.split(i).join('');
    }
    
    return answer;
}