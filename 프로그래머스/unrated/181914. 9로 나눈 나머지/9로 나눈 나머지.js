function solution(number) {
    let sum = Array.from(number).reduce((prev, curr) => prev + +curr, 0);
    return sum % 9;
}
