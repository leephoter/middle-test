const solution = (num, text) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result = result + text;
  }
  console.log('result :>> ', result);
};
const num = 4;
const text = 'Gksg';
solution(num, text);
