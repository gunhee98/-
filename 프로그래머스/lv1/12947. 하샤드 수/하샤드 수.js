/*function solution(x) {
    var answer = true;
    let str=String(x);
    let sum=0;
    for(let i of str){
        sum+=parseInt(i);
    }
    answer=(x%sum===0)
    return answer;
}
*/
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}