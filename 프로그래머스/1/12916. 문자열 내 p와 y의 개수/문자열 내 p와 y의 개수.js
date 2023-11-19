function solution(s){
    let arr = Array.from(s.toLowerCase());
    let p = arr.filter(x => x === 'p').length
    let y = arr.filter(x => x === 'y').length
    return p === y;
}