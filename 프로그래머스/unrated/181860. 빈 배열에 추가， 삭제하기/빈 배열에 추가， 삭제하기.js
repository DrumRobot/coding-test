function solution(arr, flag) {
    return arr.reduce((answer, n, i) => flag[i]
        ? answer.concat(Array(n * 2).fill(n))
        : answer.splice(0, answer.length - n), []);
}