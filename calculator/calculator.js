class Calculator {
  constructor(prevOperandText, currOperandText) {
    this.prevOperandText = prevOperandText
    this.currOperandText = currOperandText
    this.clear();
  };

  clear () {
    this.currOperand = '';
    this.prevOperand = '';
    this.operation = undefined;

  };

  delete() {};

  appendNumber(number) {
    this.currOperand = number;
  };

  chooseOperation(operation) {};

  compute() {};

  updateDisplay() {
    this.currOperandText.innerText = this.currOperand;
  };
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const prevOperandText = document.querySelector('[data-previous-operand]');
const currOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(prevOperandText, currOperandText)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
  })
})

/**
 *
*/