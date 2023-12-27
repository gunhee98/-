function solution(people, limit) {
    var answer = 0;
    let a=0;
    let b=people.length-1;
    people.sort((a,b)=>b-a);
    while(a<b){
        let sum=people[a]+people[b];
        if(sum>limit){
            a++;
        }else{
            a++;
            b--;
        }
        answer++
    }
    if(a===b)answer++;
    return answer;
}