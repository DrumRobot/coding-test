function solution(t, p) {
    let answer = 0;
    let len = p.length;
    for (let i = 0; i <= t.length - len; i++) {
        if(p - t.substr(i, len) >= 0) {
            answer += 1;
        }
    }
    return answer;
}