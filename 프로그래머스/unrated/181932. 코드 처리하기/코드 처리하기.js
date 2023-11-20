function solution(code) {
    let mode = 0;
    let ret = Array.from(code).filter((char, idx) => {
        if (char === '1') {
            mode = mode? 0 : 1;
            return false;
        }
        return idx % 2 === mode;
    });
    return ret.join('') || 'EMPTY';
}