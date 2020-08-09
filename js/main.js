const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
//console.log(firstInput.value + " " + secondInput.value);

const btnSum = document.getElementById("btn-sum");
const btnMinus = document.getElementById("btn-minus");
const btnMultiple = document.getElementById("btn-mutiple");
const btnDivision = document.getElementById("btn-division");
const res = document.getElementById("res");

btnSum.addEventListener("click", () => {
  const x = parseFloat(firstInput.value) || 0;
  const y = parseFloat(secondInput.value) || 0;
  res.innerHTML = (x + y)
});
