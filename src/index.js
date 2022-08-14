function calcSum()
{
    const addendOne = prompt('Котик, введи первое слагаемое');
    const addendTwo = prompt('Котик, введи второе слагаемое');
    const sum = (+addendOne + +addendTwo);
    alert(`Сумма равна ${sum}!`);
}

function calcSubtraction() 
{
    const numOne = prompt('Котик, введи первое число');
    const numTwo = prompt('Котик, введи, что мы хотим вычесть из первого числа');
    const result = (+numOne - +numTwo);
    alert(`Котик, у тебя получился вот такой результат ${result}!`);
}

function calcMultiplication() 
{
    const factorOne = prompt('Котик, что первое ты хочешь умножить?');
    const factorTwo = prompt('А второе?');
    const multiplicationResult = (+factorOne * +factorTwo);
    alert(`Вот что ты наумножал, Котик, ${multiplicationResult}!`);
}

function calcDivision() 
{
    const dividend = prompt('Котик, сколько сосисок ты хочешь поделить?');
    const divider = prompt('А теперь скажи, на сколько кошечек?');
    const divisionResult = (+dividend / +divider);
    alert(`Каждой кошечке достанется ${divisionResult} штучек!`);
}


//домашка 14 неделя

function calcSum1 () {
    let sum;
    const addendOne = document.getElementsByName('addNumber')[0].value;
    console.log(addendOne);
    const addendTwo = document.getElementsByName('addNumber')[1].value;
    sum = (+addendOne + +addendTwo);
    document.getElementById("result").innerHTML = result;
}

