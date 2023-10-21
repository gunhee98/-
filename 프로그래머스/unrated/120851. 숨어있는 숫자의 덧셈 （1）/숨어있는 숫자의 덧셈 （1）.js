// function solution(my_string) {
//     let answer = 0;
//     for(let i of my_string){
//         if(!isNaN(i)){
//             answer+=parseInt(i);
//         }
//     }
//     return answer;
// }

function solution(my_string){
    return my_string
        .replaceAll(/[^\d]/g,'')
        .split('')
        .reduce((a,c)=>a+parseInt(c),0)
}