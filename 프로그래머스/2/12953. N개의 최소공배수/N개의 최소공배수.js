function gcd(a,b){
    if(b===0)return a;
    return gcd(b,a%b);
}
function solution(arr) {
    var answer = 0;
    answer=arr.reduce((a,b)=>(a*b)/gcd(a,b));
    return answer;
}