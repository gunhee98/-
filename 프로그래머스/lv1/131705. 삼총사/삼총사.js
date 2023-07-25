function solution(number) {
    var answer = 0;
    
    for(let i=0;i<number.length;i++){
        let sum=0;
        for(let j=i+1;j<number.length;j++){
            
            for(let z=j+1;z<number.length;z++){
                sum+=number[i]+number[j]+number[z];
                if(sum===0){
                    answer+=1;
                }
                sum=0;
            }
        }
    }
    return answer;
}