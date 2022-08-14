function calcSum() {
const num1 = Number(document.getElementById('addendOne').value);
const num2 = Number(document.getElementById('addendTwo').value);
const resultSum = num1 + num2;
document.getElementById('resultSum').innerHTML = resultSum;
}

function calcSubtraction() 
{
    const numOne = Number(document.getElementById('numOne').value);
    const numTwo = Number(document.getElementById('numTwo').value);
    const resultMinus = (+numOne - +numTwo);
    document.getElementById('resultMinus').innerHTML = resultMinus;
}

function calcMultiplication() 
{
    const factorOne = Number(document.getElementById('factorOne').value);
    const factorTwo = Number(document.getElementById('factorTwo').value);
    const resultMultiplication = (+factorOne * +factorTwo);
    document.getElementById('resultMultiplication').innerHTML = resultMultiplication;
}

function calcDivision() 
{
    const dividend = document.getElementById('dividend').value;
    const divider = document.getElementById('divider').value;
    const resultDivision = (+dividend / +divider);
    document.getElementById('resultDivision').innerHTML = resultDivision;
}