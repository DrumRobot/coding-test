function solution(my_string, s, e) {
    let arr = Array.from(my_string);
    let rev = arr.slice(s, e + 1).reverse();
    arr.splice(s, rev.length, ...rev);
    return arr.join('');
}