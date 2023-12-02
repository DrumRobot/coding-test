function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    return A.reduce((prev, cur, i) => prev + cur * B[i], 0);
}