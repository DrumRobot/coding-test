function solution(my_string, indices) {
    return Array.from(my_string).reduce( (prev, cur, i) =>
        indices.includes(i) ? prev : prev + cur, '');
}