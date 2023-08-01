function solution(strings, n) {
    var answer = [];
    answer=strings.sort(function (a, b) {
    if (a[n] >b[n]) return 1;
    else if (a[n] <b[n]) return -1;
    else {
        if(a>b) return 1;
        if(a<b) return -1;
            return 0;
    };
  });

    return answer;
}