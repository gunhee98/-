function solution(priorities, location) {
    var answer = 0;
     const arr=priorities.map((priority,idx)=>{return {priority,idx}});
    while(arr.length){
        const queue=arr.shift();
        if(arr.some((el)=>el.priority>queue.priority)){
            arr.push(queue);
        }else{
            answer++;
            if(queue.idx===location)  break;
        }
    }
    return answer;
}