function solution(a, b) {
    let answer = 0;
    let [small, big] = a > b? [b, a] : [a, b];
    for (let i = small; i <= big; i++) {
        answer += i;
    }
    return answer;
}