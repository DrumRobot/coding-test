function solution(s) {
    return [4, 6].includes(s.length) && s.match(/^\d+$/) !== null;
}