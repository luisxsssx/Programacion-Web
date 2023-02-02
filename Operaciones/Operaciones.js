function calculateSum() {

    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);

    let result = num1 + num2 + num3;

    document.querySelector("#result").innerHTML = `La suma de ${num1} , ${num2} y ${num3} es igual a ${result}.`;
}

function calculateRest() {

    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);

    let result = num1 - num2 - num3;

    document.querySelector("#result").innerHTML = `La resta de ${num1}, ${num2}, y ${num3} es igual a ${result}`;
}

function calculateDiv() {

    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);

    let result = num1 / num2 / num3;

    document.querySelector("#result").innerHTML = `La división de ${num1}, ${num2} y ${num3} es igual a ${result}`;
}

function calculateMult() {

    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let num3 = parseFloat(document.querySelector("#num3").value);

    let result = num1 * num2 * num3;

    document.querySelector("#result").innerHTML = `La multiplicación de ${num1}, ${num2} y ${num3} es igual a ${result}`;

}

const input = document.getElementById("num1, num2,num3");
const id = clearButton.getElementById("clearButton");

clearButton.addEventListener("click", function(){
    input.value = "";
});