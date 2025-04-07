// JavaScript

// 0. Leer texto calculadora
const calText = document.getElementById("calText");
console.log(`calText: ${calText} ${calText.innerText}`);

// 1. Escribir texto calculadora
const calWrite = (text) => {
    console.log(`calWrite: ${text} ${typeof text}`)
    if (calText.innerText == "0") {
        calText.innerText = text;
    } else {
        calText.innerText += text;
    }
}

// 2. Limpiar texto calculadora
const calClear = () => {
    calText.innerText = "0";
    console.log(`calClear: ${calText} ${calText.innerText}`);
}

// 3. Borrar últim caracter calculadora
const calBack = () => {
    if (calText.innerText.length == 1) {
        calText.innerText = "0";
    } else {
        calText.innerText = calText.innerText.slice(0, -1);
    }
    console.log(`calBack: ${calText} ${calText.innerText.length} (length)`);
}

// 4. Calcular resultado calculadora
const calEval = () => {
    let resultado = eval(calText.innerText);
    calText.innerText = resultado;
    console.log(`resultado: ${resultado} ${typeof resultado}`);
    console.log(`calText: ${calText} ${calText.innerText}`);
}
