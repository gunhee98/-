function solution(lottos, win_nums) {
    var answer = [];
    const winNum=lottos.filter(e=>win_nums.includes(e)).length;
    const zeroNum=lottos.filter(e=>e===0).length;


    
        const min=7-winNum>=6?6:7-winNum;
        const max=min-zeroNum<1?1:min-zeroNum;
    
        answer=[max,min];
    
    return answer;
}