const solution = (text) => {
  const result = {
    삼성: [],
    애플: [],
    한성: [],
    레노버: [],
    엘지: [],
    아수스: [],
    기타: [],
  };
  const check = {
    1: '삼성',
    2: '애플',
    3: '한성',
    4: '레노버',
    5: '엘지',
    6: '아수스',
    0: '기타',
  };

  const num = text.split(' ');
  const firstNum = num.map((item) =>
    item < 10000 && item[0] >= 1 && item[0] <= 6 ? Number(item[0]) : 0
  );

  firstNum.forEach((item, index) => {
    result[check[item]] = [...result[check[item]], Number(num[index])].sort(
      (a, b) => a - b
    );
  });

  return result;
};
