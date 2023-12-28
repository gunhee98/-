function solution(n, left, right) {
    var answer = [];
    let y=left%n;
    let x=Math.floor(left/n);
    for(let i=0;i<=right-left;i++){
        answer.push(Math.max(x,y)+1);
        if(y===n-1){
            y=0;
            x++;
        }else{
            y++;
        }
    }
    return answer;
}