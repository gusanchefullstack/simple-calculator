function add(x, y) {
  return x + y;
}
function substraction(x, y) {
  return x - y;
}
function multiplication(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}
function displayResult(textResult) {
  let display = document.getElementById("result-text");
  display.textContent = textResult;
}
function formatResult(result) {
  return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let currentOperator = "";
let previousOperator = "";
let operand = "";
let stringA = "";
let stringB = "";


function captureOperand() {
  let htmlCollection = document.getElementsByClassName("number-key");
  let keyDigits = [...htmlCollection];
  console.log(keyDigits);
  keyDigits.forEach((element) => {
    element.addEventListener("click", (event) => {
      operand += event.target.innerText;
      console.log("Operando", parseFloat(operand));
      displayResult(formatResult(operand));
      if (!currentOperator) {
        stringA = operand;
        console.log(`stringA: ${stringA}, stringB: ${stringB}, CurrentOperator: ${currentOperator}, previousOperator: ${previousOperator}, Operando: ${operand}`);
      } else {
        stringB = operand;
        console.log(`stringA: ${stringA}, stringB: ${stringB}, CurrentOperator: ${currentOperator}, previousOperator: ${previousOperator}, Operando: ${operand}`);
      }
    });
  });
}

function captureAddition() {
  let additionKey = document.getElementById("addition");
  additionKey.addEventListener("click", (event) => {
    currentOperator = "+";
    if(stringA && stringB){
        executeOperation();
    }
    console.log(`Current Operator: ${currentOperator}, Previous Operator: ${previousOperator}`);
    operand = "";
    previousOperator = currentOperator;
    
  });
}
function executeOperation() {
    let result = calculateResult();
    console.log(`Resultado: ${result}, stringA: ${stringA}, stringB: ${stringB}, CurrentOperator: ${currentOperator}, previousOperator: ${previousOperator}, Operando: ${operand}`);
    displayResult(formatResult(result));
    stringA = result.toString();
    stringB = "";
}

function captureSubstraction() {
  let substractionKey = document.getElementById("difference");
  substractionKey.addEventListener("click", (event) => {
    currentOperator = "-";
    if(stringA && stringB){
        executeOperation();
    }
    console.log(`Current Operator: ${currentOperator}, Previous Operator: ${previousOperator}`);
    operand = "";
    previousOperator = currentOperator;
    
  });
}
function captureMultiplication() {
  let multiplicationKey = document.getElementById("multiplication");
  multiplicationKey.addEventListener("click", (event) => {
    currentOperator = "x";
    if(stringA && stringB){
        executeOperation();
    }
    console.log(`Current Operator: ${currentOperator}, Previous Operator: ${previousOperator}`);
    operand = "";
    previousOperator = currentOperator;
    
  });
}
function captureDivision() {
  let divisionKey = document.getElementById("division");
  divisionKey.addEventListener("click", (event) => {
    currentOperator = "/";
    if(stringA && stringB){
        executeOperation();
    }
    console.log(`Current Operator: ${currentOperator}, Previous Operator: ${previousOperator}`);
    operand = "";
    previousOperator = currentOperator;
    
  });
}
function captureEqual() {
  let resultKey = document.getElementById("equal");
  resultKey.addEventListener("click", (event) => {
    currentOperator = "=";
    if(stringA && stringB){
        let result = calculateResult();
        console.log(`Resultado: ${result}, stringA: ${stringA}, stringB: ${stringB}, CurrentOperator: ${currentOperator}, previousOperator: ${previousOperator}, Operando: ${operand}`);
        displayResult(formatResult(result));
        stringA = result.toString();
        stringB = "";
    }
    console.log(`Current Operator: ${currentOperator}, Previous Operator: ${previousOperator}`);
    previousOperator = currentOperator;
  });
}
function calculateResult() {
    let result = "";
    switch (previousOperator) {
        case "+":
            result = add(parseFloat(stringA), parseFloat(stringB));
            break;
        case "-":
            result = substraction(parseFloat(stringA), parseFloat(stringB));
            break;
        case "x":
            result = multiplication(parseFloat(stringA), parseFloat(stringB));
            break;
        case "/":
            result = division(parseFloat(stringA), parseFloat(stringB));
            break;
        default:
            break;
    }
    console.log(`Resultado: ${result}`);
    return result;
}

function captureCE() {
  let clearLastKey = document.getElementById("ce");
  clearLastKey.addEventListener("click", (event) => {
    console.log("CE");
    displayResult(formatResult("0"));
    operand = "";
    if (currentOperator !== "") {
      stringB = "";
    } else {
      stringA = "";
      currentOperator = "";
    }
  });
}
function captureClear() {
  let clearKey = document.getElementById("clear");
  clearKey.addEventListener("click", (event) => {
    console.log("Clear");
    console.clear();
    displayResult(formatResult("0"));
    currentOperator = "";
    operand = "";
    stringA = "";
    stringB = "";
  });
}
function captureBackspace() {
  let backSpaceKey = document.getElementById("backspace");
  backSpaceKey.addEventListener("click", (event) => {
    console.log("Backspace");
  });
}

captureOperand();
captureAddition();
captureSubstraction();
captureMultiplication();
captureDivision();
captureEqual();
captureCE();
captureClear();
captureBackspace();
