const solution = (time) => {
  const hour = time[0] + time[1] + '시';

  const min = time[3] + time[4] + '분';

  const sec = time[6] + time[7] + '초';

  const result = [hour, min, sec];
  console.log('result :>> ', result);
};
const time = '13:05:31';
solution(time);
