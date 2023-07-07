/*문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"
입출력 예 설명
입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
*/
function solution(my_string) {
  let answer = "";
  for (let i = my_string.length; i >= 1; i--) {
    answer += my_string[i - 1]; //빈 문자열에 my_string의 문자열 뒤에 것부터 순서대로 넣어서 뒤집기
  }
  return answer;
}
