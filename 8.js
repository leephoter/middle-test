const solution = (...arg) => {
  let result = {};

  for (let i = 1; i < arg.length; i++) {
    result[arg[i].split(' ')[0]] = arg[i].split(' ')[1];
  }
  console.log('result :>> ', result);
};

const num = 3;
const one = 'woorim 남자';
const two = 'soongu 여자';
const three = 'jiwon 여자';
solution(num, one, two, three);
