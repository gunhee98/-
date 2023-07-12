const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    upper_str=str.toUpperCase();
    trans_str='';
    for(let i in str){
        if(str[i]===upper_str[i]){
            trans_str+=str[i].toLowerCase();
        }else{
            trans_str+=str[i].toUpperCase();
        }
    }
    console.log(trans_str);
});