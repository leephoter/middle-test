const solution = (text) => {
  let getText = text.split(' ');
  getText = getText.map((item) => {
    return item
      .split('')
      .map((item2) =>
        item2 === item2.toUpperCase()
          ? item2.toLowerCase()
          : ' ' + item2.toUpperCase()
      );
  });
  const originText = getText.map((item) => item.join('')).join(' ');
  const result = new Set(originText.split(' '));
  let realResult = '';
  result.forEach((item) => {
    realResult = realResult + item;
    realResult = realResult + ' ';
  });
  console.log(realResult);
};
const text = 'mYmY NAME IS wOOAHANaGILEwOOAHANaGILE';
solution(text);
