function solution(s) {
    let openCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openCount++;
        } else {
            if (openCount === 0) {
                return false;
            }
            openCount--;
        }
    }
    
    return openCount === 0;
}