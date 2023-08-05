function solution(arr) {
    var answer = [];
    answer=arr.map((item)=>{
        if(item>=50&&item%2===0){
            return Math.floor(item/2);
        }
        else if(item<50&&item%2===1){
            return item*2;
        }else{
            return item;
        }
    })
    return answer;
}