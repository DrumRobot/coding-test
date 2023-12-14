function gcd(a, b){
    return b == 0? a : gcd(b, a % b);
}

function solution(n, m) {
    let g = gcd(n, m);
    return [g, n * m / g];
}