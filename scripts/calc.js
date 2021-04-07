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
function formatResult(result){
    console.log(result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    
}

displayResult(formatResult(197653777.79));