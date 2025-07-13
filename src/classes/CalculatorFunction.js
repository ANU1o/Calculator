class CalculatorFunction {
  /**
   * @type {HTMLInputElement}
   */
  calculatorScreen;

  /**
   * Declaring `CalculatorFunction` requires to pass the calculator input.
   *
   * @param {HTMLInputElement} calculatorScreen
   */
  constructor(calculatorScreen) {
    this.calculatorScreen = calculatorScreen;
  }

  /**
   * Passes button corresponding value to the calculator screen input
   *
   * @param {number | '/' | '*' | '-' | '+' | '00' | '.'} data
   */
  displayData = (data) => {
    this.calculatorScreen.value += data;
  };

  /**
   * AC button action meant to clear the `this.calculatorScreen`
   */
  allClear = () => {
    this.calculatorScreen.value = null;
  };

  /**
   * Give result for the values entered on `this.calculatorScreen`
   */
  equalTo = () => {
    try {
      this.calculatorScreen.value = eval(this.calculatorScreen.value);
    } catch {
      this.calculatorScreen.value = "Error";
    }
  };

  /**
   * Removes last entered character from `this.calculatorScreen`
   */
  backspace = () => {
    this.calculatorScreen.value = this.calculatorScreen.value.slice(0, -1);
  };

  /**
   * Performs a divided by 100 on the values on `this.calculatorScreen`
   */
  percent = () => {
    this.calculatorScreen.value /= 100;
  };
}

export default CalculatorFunction;
