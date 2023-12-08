function solution(num_list) {
    return num_list.reduce((answer, v) => {
        while (v > 1) {
            v -= v % 2;
            v /= 2;
            answer++;
        }
        return answer;
    }, 0);
}