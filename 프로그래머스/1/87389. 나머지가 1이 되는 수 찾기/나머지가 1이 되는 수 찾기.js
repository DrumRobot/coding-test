function solution(n) {
    let i = 2;
    n -= 1;
    while(n % i) i++;
    return i;
}