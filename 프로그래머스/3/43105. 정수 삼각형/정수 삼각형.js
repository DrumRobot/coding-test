function solution(triangle) {
    const rows = [[triangle[0][0]]];
    let arr;
    for (let i = 0; i < triangle.length - 1; i++) {
        let row = rows[i];
        let next = triangle[i + 1];
        arr = new Array(i + 2).fill(0);
        for (let j = 0; j < i + 1; j++) {
            const calcNext = (k) => arr[k] = Math.max(arr[k], next[k] + row[j]);
            calcNext(j);
            calcNext(j + 1);
        }
        rows.push(arr);
    }
    return Math.max(...arr);
}