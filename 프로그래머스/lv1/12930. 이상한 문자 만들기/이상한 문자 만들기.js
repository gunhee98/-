function solution(s) {
    var answer = '';
    let arr=s.split(" ");
    let arr1=[];
    arr.forEach((item)=>
                {
        let a="";
        for(let i in item ){
            if(i%2===0){a+=item[i].toUpperCase();}
            else{a+=item[i].toLowerCase();}
        }
        arr1.push(a);
    })
   answer=arr1.join(" ");
    return answer;
}