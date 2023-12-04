function solution(arr, [interval1, interval2]) {
    let arr1 = arr.slice(interval1[0], interval1[1] + 1);
    let arr2 = arr.slice(interval2[0], interval2[1] + 1);
    return [...arr1, ...arr2];
}