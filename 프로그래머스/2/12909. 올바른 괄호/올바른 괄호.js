function solution(s){
    let count = 0;
    for (let ch of s) {
        count += ch === '('? 1 : -1;
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}