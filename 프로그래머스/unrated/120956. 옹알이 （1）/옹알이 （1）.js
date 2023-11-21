function solution(babbling) {
  const regex = /^(aya|ye|woo|ma)+$/;
  return babbling.filter(word => regex.test(word)).length;
}
