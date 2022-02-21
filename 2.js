const solution = (arr) => {
  const result = [];
  if (arr.length <= 1) {
    for (let i = 0; i < 3; i++) {
      result.push(arr[0]);
    }
  } else {
    result.push(Math.min.apply(null, arr));
    result.push(arr.reduce((a, b) => a + b));
    result.push(Math.max.apply(null, arr));
  }
  console.log(`result`, result);
};

const arr1 = [10, 3, 2, -1];
solution(arr1);
