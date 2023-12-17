function solution(arr1, arr2) {
    return arr1.map(
        (arr, i) =>
            arr.map((v, j) => v + arr2[i][j])
    );
}