const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function calculate(input){
    try{
        if (display.value == 69420)
            display.value = "Funny Num";
        else
            display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
function clearDisplay(input){
    display.value = "";
}