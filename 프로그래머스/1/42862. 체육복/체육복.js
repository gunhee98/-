function solution(n, lost, reserve) {
    var answer = n-lost.length;
    let realLost=lost.filter(e=>!reserve.includes(e)); //[2,4]
    let realReserve=reserve.filter(e=>!lost.includes(e)); //[1,3,5]
    answer+=lost.length-realLost.length;
    realLost.sort((a,b)=>a-b);
    realLost.forEach((e)=>{
        if(realReserve.length===0){
            return;
        }
        if(realReserve.includes(e-1)){
            realReserve=realReserve.filter(l => l!==e-1);
            answer++;
        }else if(realReserve.includes(e+1)){
            realReserve=realReserve.filter(l => l!==e+1);
            answer++;
        }
    })
    return answer;
}