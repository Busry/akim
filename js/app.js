let inputs = document.querySelector("#inputs"),
  answer = document.querySelector("#answer");

function insert(value) {
  inputs.value += value;
}
function clean() {
  inputs.value = "";
}
function back() {
  inputs.value = inputs.value.substring(0, inputs.value.length - 1);
}
function equall() {
  if (value !== "") {
    answer.value = eval(inputs.value);
  }
}
