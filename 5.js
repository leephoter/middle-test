const solution = (pattern, text) => {
  const arr1 = [...new Set(pattern.split(''))];
  arr1.forEach((item, index) => {
    globalThis[item] = index;
  });

  let result1 = '';
  pattern.split('').forEach((item) => {
    result1 = result1 + globalThis[item];
  });

  const getText = [...new Set(text.split(' '))];
  getText.forEach((item, index) => {
    globalThis[item] = index;
  });

  let result2 = '';
  text.split(' ').forEach((item) => {
    result2 = result2 + globalThis[item];
  });

  console.log(result1 === result2);
};
const pattern = 'abbac';
const text = 'foo bar bar foo cc';
solution(pattern, text);
