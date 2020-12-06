let enteredNumber = "0";
let total = 0;
let arr = [0];
for (
  let input = Number(enteredNumber);
  enteredNumber !== null;
  input = Number(enteredNumber)
) {
  if (Number.isNaN(input) === false) {
    arr.push(input);
    total += input;
  } else {
    alert(`Было введено не число, попробуйте еще раз`);
  }
  enteredNumber = prompt("Введите число");
}

alert(`Общая сумма чисел равна , ${total}!`);
