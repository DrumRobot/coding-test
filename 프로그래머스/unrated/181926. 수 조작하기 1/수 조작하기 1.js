const deltas = new Map([
    ['w', 1],
    ['s', -1],
    ['d', 10],
    ['a', -10],
])

function solution(n, control) {
    return [...control].reduce((n, cmd) => n += deltas.get(cmd), n);
}
