import CalculatorFunction from "../classes/CalculatorFunction.js";

const activateCalcFunction = () => {
  /**
   * Calculator Input
   * @type {HTMLInputElement}
   */
  const calcScreen = document.getElementById("calcscreen");

  const calcFunction = new CalculatorFunction(calcScreen);

  const displayButtons = document.querySelectorAll("[data-value]");

  // Calculator Screen entry
  displayButtons.forEach((displayButton) => {
    displayButton.addEventListener("click", () => {
      calcFunction.displayData(displayButton.getAttribute("data-value"));
    });
  });

  // `⏎` button binding
  document
    .getElementById("backspace")
    .addEventListener("click", () => calcFunction.backspace());

  // `%` button action
  document
    .getElementById("percent")
    .addEventListener("click", () => calcFunction.percent());

  // `AC` button action
  document
    .getElementById("ac")
    .addEventListener("click", () => calcFunction.allClear());

  // `=` button action
  document
    .getElementById("equal")
    .addEventListener("click", () => calcFunction.equalTo());

  /**
   * Attaches keyboard event listeners to map key presses to calculator actions.
   *
   * Supported keyboard interactions:
   * - Digits (0–9) and decimal (.) → `displayData()`
   * - Operators (+, -, *, /) → `displayData()`
   * - Equal (`Enter` or `=`) → `equalTo()`
   * - Backspace → `backspace()`
   * - Escape → `allClear()`
   * - Percent → `percent()` via `%` key or `Shift + 5`
   *
   * Prevents default browser behaviors to allow full control over input logic.
   *
   * @param {KeyboardEvent} event - The keydown event triggered by user input.
   */
  document.addEventListener("keydown", (event) => {
    const { key, shiftKey } = event;

    /**
     * Maps keyboard keys to corresponding calculator actions.
     *
     * Keys can represent:
     * - Digits (`0`–`9`) and decimal point (`.`) → characters passed to `displayData()`
     * - Operators (`+`, `-`, `*`, `/`) → passed to `displayData()`
     * - Functional keys:
     *   - `"Enter"` or `"="` → triggers calculation (`equalTo()`)
     *   - `"Backspace"` → deletes last character (`backspace()`)
     *   - `"Escape"` → clears input (`allClear()`)
     *
     * @type {Object.<string, string>}
     */
    const keyMap = {
      // Numbers and decimal
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      ".": ".",

      // Operators
      "+": "+",
      "-": "-",
      "*": "*",
      "/": "/",

      // Functional keys
      Enter: "equal",
      "=": "equal",
      Backspace: "backspace",
      Escape: "clear",
    };

    // Percent binding: Shift + 5 typically equals `%`
    if (key === "%" || (key === "5" && shiftKey)) {
      event.preventDefault();
      calcFunction.percent();
      return;
    }

    switch (keyMap[key]) {
      case "equal":
        event.preventDefault();
        calcFunction.equalTo();
        break;
      case "backspace":
        event.preventDefault();
        calcFunction.backspace();
        break;
      case "clear":
        event.preventDefault();
        calcFunction.allClear();
        break;
      default:
        if (keyMap[key]) {
          event.preventDefault();
          calcFunction.displayData(keyMap[key]);
        }
        break;
    }
  });
};

export default activateCalcFunction;
