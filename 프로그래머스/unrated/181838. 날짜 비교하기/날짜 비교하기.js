function timestamp([year, month, day]) {
    return ((year * 12) + month) * 31 + day;
}

function solution(date1, date2) {
    return timestamp(date1) < timestamp(date2)? 1 : 0;
}