function solution(s, n) {
    var answer = '';
    for(let i in s){
        if(s.charCodeAt(i)===32){
            answer+=s[i];
            continue;
        }
        let charCode=s.charCodeAt(i)
        if (charCode <= 90) {
        charCode += n;
         if (charCode > 90) charCode -= 26;
      }
      else {
        charCode += n;
       if (charCode > 122) charCode -= 26;
      }
         answer += String.fromCharCode(charCode);
    }
    return answer;
}