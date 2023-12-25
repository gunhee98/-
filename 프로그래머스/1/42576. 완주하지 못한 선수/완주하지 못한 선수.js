function solution(participant, completion) {
    var answer = '';
    const list=new Map();
    for(let name of participant){
        if(list.has(name)){
            list.set(name,list.get(name)+1);
        }else{
            list.set(name,1);
        }
    }
    for(let name of completion){
        if(list.has(name)){
            list.set(name,list.get(name)-1);
        }
    }
    for(let name of participant){
        if(list.get(name)>=1){
            answer=name
        }
    }

    return answer;
}