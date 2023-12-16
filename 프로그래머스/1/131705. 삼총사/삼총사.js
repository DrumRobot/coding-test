

function solution(number) {
    let answer = 0;
    for (let i in number) {
        for (let j in number) {
            if (j == i) continue;
            for (let k in number) {
                if (k == i || k == j) continue;
                if (number[i] + number[j] + number[k] === 0) answer += 1;
            }
        }
    }
    return answer / 6;
}