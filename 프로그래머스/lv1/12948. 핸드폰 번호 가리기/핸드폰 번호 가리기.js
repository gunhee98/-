function solution(phone_number) {
    var answer = '';
    let front=phone_number.substring(0,phone_number.length-4);
    let back=phone_number.substring(phone_number.length-4,phone_number.length);
    front= front.replace(/[0-9]/g, '*');
    answer=front+back;
    return answer;
}