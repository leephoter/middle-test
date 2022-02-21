const solution = (score) => {
  let arr = score.split(', ');
  arr = arr.map((item) => Number(item));

  const result = Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
  console.log('result :>> ', result);
};
const score = '0, 30, 0, 0, 70, 100, 80, 100, 99, 88, 70';
solution(score);
