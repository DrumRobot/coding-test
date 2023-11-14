function solution(numbers) {
    const len = numbers.length;
    numbers.sort((a, b) => b - a);
    const [max1, max2] = numbers;
    const min1 = numbers.pop();
    if (min1 >= 0) {
        return max1 * max2;
    }
    const min2 = numbers.pop();
    return Math.max(min1 * min2, max1 * max2);
}