function solution(keyinput, board) {
    var answer = [];
    const xRange=Math.floor(board[0]/2);
    const yRange=Math.floor(board[1]/2);
    let x=0;
    let y=0;
    for(let i of keyinput){
        if (i === "right" && x + 1 <= xRange) x++ 
        if (i === "left" && x - 1 >= -xRange) x-- 
        
        if (i === "up" && y + 1 <= yRange) y++
        if (i === "down" && y - 1 >= -yRange) y--
    }
    answer=[x,y];
    return answer;
}