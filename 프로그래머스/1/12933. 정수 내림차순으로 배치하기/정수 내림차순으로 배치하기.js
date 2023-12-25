function solution(n) {
    let arr = Array.from(n.toString()).sort((a, b) => a > b ? -1 : 1)
    return parseInt(arr.join(''));
}