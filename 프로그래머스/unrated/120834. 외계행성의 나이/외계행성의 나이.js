function solution(age) {    
    return Array.from(age.toString())
        .reduce((prev, cur) => {
            return prev + String.fromCharCode(Number(cur) + 97);
        }, '');
}