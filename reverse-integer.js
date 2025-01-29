var reverse = function (x) {
  if ((x <= Math.pow(-2, 31) || x > Math.pow(2, 31 - 1)) || x === 0) {
    return 0;
  }
  let strVal = String(Math.abs(x));
  let result = "";

  for (i = strVal.length - 1; i >= 0; i--) {
    result += strVal[i];
  }

  return result * (x / Math.abs(x));
};

console.log(reverse(1463847412));
