const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');
const res = document.querySelector('#res');

const sym = ['-', '+', '*', '/'];
let cals = [];
let vals = [];
let binStr = '';
let answer = 0;

const clear = () => {
  res.value = null;
  vals = [];
  cals = [];
  binStr = '';
  answer = 0;
};

const calc = (nums, methods) => {
  answer = nums[0] || 0;
  for (let i = 0; i < nums.length - 1; i++) {
    switch (methods[i]) {
      case '-':
        answer -= nums[i + 1];
        break;
      case '+':
        answer += nums[i + 1];
        break;
      case '*':
        answer *= nums[i + 1];
        break;

      case '/':
        answer /= nums[i + 1];
        break;
    }
  }
  console.log(answer);
};

const updateScreen = (val) => () => {
  switch (val) {
    case '-':
    case '+':
    case '*':
    case '/':
      if (res.value && !sym.includes(res.value[res.value.length - 1])) {
        vals.push(parseInt(binStr, 2));
        cals.push(val);
        binStr = '';
        res.value += val;
      }
      break;
    default:
      res.value += val;
      binStr += val;
  }
};

const equal = () => {
  vals.push(parseInt(binStr, 2));
  if (sym.includes(res.value[res.value.length - 1])) {
    res.value = res.value.substring(0, res.value.length - 1);
    cals.pop();
  }
  calc(vals, cals);
  res.value = answer.toString(2);
};

btnClr.onclick = clear;
btnEql.onclick = equal;

btn0.onclick = updateScreen('0');
btn1.onclick = updateScreen('1');
btnSum.onclick = updateScreen('+');
btnSub.onclick = updateScreen('-');
btnMul.onclick = updateScreen('*');
btnDiv.onclick = updateScreen('/');
