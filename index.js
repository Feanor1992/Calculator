const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const display = document.querySelector('.display-numbers');
const numbers = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operator');

let displayVal = '0';
let pendingVal;  
let evalStringArr = []; 
  
updateDisplayVal = (e) => {
    const btnText = e.target.innerText;
    if(displayVal === "0") { 
      displayVal = ""; 
    }
    displayVal += btnText; 
    display.innerText = displayVal;
} 

performOperation = (e) => {
  const operator = e.target.innerText;  
  
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '';
            display.innerText = displayVal;
            evalStringArr.push(pendingVal);
            evalStringArr.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '';
            display.innerText = displayVal;
            evalStringArr.push(pendingVal);
            evalStringArr.push('-');
            break;
        case '*':
            pendingVal = displayVal;
            displayVal = '';
            display.innerText = displayVal;
            evalStringArr.push(pendingVal);
            evalStringArr.push('*');
            break;
        case '/':
            pendingVal = displayVal;
            displayVal = '';
            display.innerText = displayVal;
            evalStringArr.push(pendingVal);
            evalStringArr.push('/');
            break;
        case '%':
            pendingVal = displayVal;
            displayVal = '';
            display.innerText = displayVal;
            evalStringArr.push(pendingVal);
            evalStringArr.push('%');
            break;
        case '=':
            evalStringArr.push(displayVal);
            var evaluation = eval(evalStringArr.join(' '));
            displayVal = evaluation + '';
            display.innerText = displayVal;
            evalStringArr = [];
            break;
        default:
            break;
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', updateDisplayVal) 
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', performOperation);
}

clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArr = [];
    display.innerHTML = displayVal;
}

decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    display.innerText = displayVal;
}

document.addEventListener('keydown', event => {
    if ((event.key).match(/[0-9%\/*\-+\(\)=%]|Backspace|Enter/)) performOperation(event.key)
})