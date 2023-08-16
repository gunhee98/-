function solution(nums) {
    var answer = 0;
    const arr=[];
    nums.forEach(item=>{
        if(!arr.includes(item)){
            arr.push(item);
        }
    })
    if(nums.length/2>arr.length){
        answer=arr.length;
    }else{
        answer=nums.length/2;
    }
    return answer;
}