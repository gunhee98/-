function solution(n) {
    var answer = 0;
    let binaryLen=n.toString(2).split("1").length;
    while(true){
        n++;
        if(n.toString(2).split("1").length===binaryLen){
            return n;   
        }
    }
    return answer;
}