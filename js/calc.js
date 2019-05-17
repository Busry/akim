export default class calculator {
  constructor(inputs, answer) {
    this.inputs = inputs;
    this.answer = answer;
  }
  insert(value) {
    this.inputs.value += value;
  }
  clean() {
    this.inputs.value = "";
  }
  back() {
    this.inputs.value = this.inputs.value.substring(
      0,
      this.inputs.value.length - 1
    );
  }
  equall() {
    if (this.inputs.value !== "") {
      this.answer.value = eval(this.inputs.value);
    }
  }
}
