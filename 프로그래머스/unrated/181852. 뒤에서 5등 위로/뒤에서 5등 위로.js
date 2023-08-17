function solution(num_list) {
    var answer = [];
    num_list.sort((a,b)=>{
        if(a>b){
            return 1;
        }else if(a<b){
            return -1;
        }else{
            return 0;
        }
    })
    answer=num_list.slice(5);
    return answer;
}