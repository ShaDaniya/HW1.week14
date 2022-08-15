//Первый вариант - просто выделить цветом

function select(sender) {

sender.classList.add("selected");
}

//Второй вариант - выделить цветом и при втором клике отменить

function selectAnother(elem){
    if (elem.style.backgroundColor == "") {
        elem.style.backgroundColor = "rgb(172, 112, 228)";
    } 
    else {
        elem.style.backgroundColor = "";
    }
}