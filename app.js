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
const vals = [];
let binStr = '';
let answer = 0;

const clear = () => {
  res.value = null;
  vals = [];
};

const updateScreen = (val) => () => {
  switch (val) {
    case '-':
    case '+':
    case '*':
    case '/':
      if (res.value && !sym.includes(res.value[res.value.length - 1])) {
        vals.push(parseInt(binStr, 2));
        binStr = '';
        res.value += val;
      }
      break;
    default:
      res.value += val;
      binStr += val;
  }
  console.log(vals);
};

const equal = () => {
  res.value = answer;
};

btnClr.onclick = clear;
btnEql.onclick = equal;

btn0.onclick = updateScreen('0');
btn1.onclick = updateScreen('1');
btnSum.onclick = updateScreen('+');
btnSub.onclick = updateScreen('-');
btnMul.onclick = updateScreen('*');
btnDiv.onclick = updateScreen('/');
