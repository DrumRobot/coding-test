function solution(my_string, m, c) {
    return Array.from(my_string).reduce(
        (prev, cur, i) => i % m === c - 1? prev + cur : prev, '');
}