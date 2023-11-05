function solution(s) {
    return s.toLowerCase().split(' ')
        .map(s => s? s[0].toUpperCase() + s.slice(1) : '').join(' ');
}