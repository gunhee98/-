function solution(clothes) {
    var answer = 1;
    const clothesMap=new Map();
clothes.forEach(e=>{
   const [name,type]=e;
    if(clothesMap.get(type)){
        clothesMap.set(type,clothesMap.get(type)+1);
    }else{
        clothesMap.set(type,1);
    }
})
   clothesMap.forEach(value=>{
       answer*=value+1;
   })
    return answer-1;
}