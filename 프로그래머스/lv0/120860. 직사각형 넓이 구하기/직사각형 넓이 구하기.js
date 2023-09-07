function solution(dots) {
    var answer = 0;
    dots.sort((a,b)=>{
       if (a[0] > b[0]) {
    return 1;
  }
  if (a[0] < b[0]) {
    return -1;
  }
 
  return 0;
    })
    const xLength=Math.abs(dots[0][0]-dots[2][0]);
    const yLength=Math.abs(dots[0][1]-dots[1][1]);
    answer=xLength*yLength;
    return answer;
}