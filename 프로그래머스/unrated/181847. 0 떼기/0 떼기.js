function solution(n_str) {
    var answer = '';
    let index=0;
     for(let i=0; i<n_str.length;i++){
         if(n_str[i]==0){
             index++;
         }else{
             break;
         }
     }
    for(let j=index; j<n_str.length;j++){
        answer+=n_str[j];
    }
    return answer;
}