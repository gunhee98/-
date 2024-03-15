function solution(cacheSize, cities) {
    var answer = 0;
    const arr=[];
    if(cacheSize===0){
        answer=cities.length*5;
    }else{
    cities.forEach(city=>{
        const upper_city=city.toUpperCase();
        if(arr.includes(upper_city)){
            const index=arr.indexOf(upper_city);
            arr.splice(index,1);
            arr.unshift(upper_city);
            answer+=1;
        }else{
            if(arr.length>=cacheSize){
                arr.pop();
                arr.unshift(upper_city);
            }else{
                arr.unshift(upper_city);
            }
            answer+=5;
        }
    })
    }
    return answer;
}