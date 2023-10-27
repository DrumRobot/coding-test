function solution(x) {
    let sum = 0;
    for(let i = x; i > 0; i = parseInt(i / 10)) {
        sum += i % 10;
    }
    return x % sum === 0;
}