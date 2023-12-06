function solution(s) {
    return s.split(' ')
        .map(word => Array.from(word)
             .map((ch, i) => i % 2? ch.toLowerCase() : ch.toUpperCase()).join(''))
        .join(' ');
}