function solution(answers) {
    var answer = [];
    var one = [1, 2, 3, 4, 5];
    var two = [2, 1, 2, 3, 2, 4, 2, 5]
    var three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var result=[0,0,0];
    for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) result[0]++;
    if (two[i % two.length] === answers[i]) result[1]++;
    if (three[i % three.length] === answers[i]) result[2]++;
  }
    const maxValue=Math.max(...result);
    for(let i=0;i<result.length;i++){
        if(maxValue===result[i]){
            answer.push(i+1);
        }
    }
   
    return answer;
}