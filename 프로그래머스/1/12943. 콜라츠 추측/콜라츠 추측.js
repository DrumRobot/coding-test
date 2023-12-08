function solution(num) {
    for (let i = 0; i < 500; i++) {
        if (num === 1) {
            return i;
        }
        if (num % 2) {
            num = num * 3 + 1;
        } else {
            num /= 2;
        }
    }
    return  -1;
}