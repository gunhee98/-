function solution(s) {
    var answer = [];
    let s_arr=s.replace(/{{|}}/g,"").split("},{");
    s_arr=s_arr.map(e=>e.split(","));
    s_arr.sort((a,b)=>{
        if (a.length>b.length){
            return 1;
        }else{
            return -1;
        }
    })

    s_arr.forEach(e=>{
        answer.push((e.find(i=>!answer.includes(i))));
    })

    return answer.map(e=>parseInt(e));
}