displayData = (data) => {
  calcscreen.value += data;
};

allClear = () => {
  calcscreen.value = null;
};

equalTo = () => {
  calcscreen.value = eval(calcscreen.value);
};

backspace = () => {
  calcscreen.value = calcscreen.value.slice(0, -1);
};

percent = () => {
  calcscreen.value /= 100;
};
