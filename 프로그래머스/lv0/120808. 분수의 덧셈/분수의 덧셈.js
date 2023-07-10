function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let denominator=denom1*denom2; //분모
    let molecule=numer1*denom2+numer2*denom1; //분자
    let max=0 //최대공약수 저장할 변수
    for(let i=1; i<=molecule;i++){   //최대공약수 구하기
        if(denominator%i===0&&molecule%i===0){
            max=i;
        }
    }
    answer=[molecule/max,denominator/max];
    return answer;
}     