function solution(code) {
    let mode = 0;
    let ret = Array.from(code).filter((char, idx) => {
        if (char === '1') {
            mode = mode? 0 : 1;
            return false;
        }
        if (mode === 0) {
            return idx % 2 === 0;
        } else if (mode === 1) {
            return idx % 2 === 1;
        }
    });
    return ret.join('') || 'EMPTY';
}