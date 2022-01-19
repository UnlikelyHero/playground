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
    if (number === '.' && this.currOperand.includes('.')) return;
    this.currOperand = this.currOperand.toString() + number.toString();
  };

  chooseOperation(operation) {
    if (this.currOperand === '') return;
    if (this.prevOperand !== '') {
      this.compute()
    }
    this.operation = operation;
    this.prevOperand = this.currOperand
    this.currOperand = '';
  };

  compute() {};

  updateDisplay() {
    this.currOperandText.innerText = this.currOperand;
    this.prevOperandText.innerText = this.prevOperand;
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

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay();
  })
})

/**
 *
*/