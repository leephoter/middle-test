const solution = (n, m) => {
  const text1 = new Set(n.split(''));
  const text2 = m.split('');
  let result = 0;
  text1.forEach((text1) => {
    text2.forEach((text2, index) => {
      text1 === text2 ? (result = result + index) : 0;
    });
  });
  console.log('result :>> ', result);
};
const N = 'afb';
const M = 'fgfhw';
solution(N, M);
