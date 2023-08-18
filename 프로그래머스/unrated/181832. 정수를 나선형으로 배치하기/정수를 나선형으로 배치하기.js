function solution(n) {
    var answer = [];
    for(let i=0; i<n;i++) answer.push([]);
    let increaseNum = 1
    let startRow = 0
    let startCol = 0
    let endRow = n-1
    let endCol = n-1
    while(startRow<=endRow&&startCol<=endCol){
        for(let i=startCol;i<=endCol;i++){
            answer[startRow][i]=increaseNum++;
        }
        startRow++;
        for(let i=startRow;i<=endRow;i++){
            answer[i][endCol]=increaseNum++;
        }
        endCol--;
        for(let i=endCol;i>=startCol;i--){
            answer[endRow][i]=increaseNum++;
        }
        endRow--;
        for(let i=endRow;i>=startRow;i--){
            answer[i][startCol]=increaseNum++;
        }
        startCol++;
    }
    
    return answer;
}