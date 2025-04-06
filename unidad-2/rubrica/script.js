// JavaScript

// 0. Leer texto calculadora
let calText = document.getElementById("calText");
console.log(`calText: ${calText} ${calText.innerText}`);

// 1. Escribir texto calculadora
let calWrite = (text) => {
    console.log(`calWrite: ${text} ${typeof text}`)
    if (calText.innerText == "0") {
        calText.innerText = text;
    } else {
        calText.innerText += text;
    }
}

// 2. Limpiar texto calculadora
let calClear = () => {
    calText.innerText = "0";
    console.log(`calClear: ${calText} ${calText.innerText}`);
}

// 3. Borrar últim caracter calculadora
let calBack = () => {
    if (calText.innerText.length == 1) {
        calText.innerText = "0";
    } else {
        calText.innerText = calText.innerText.slice(0, -1);
    }
    console.log(`calBack: ${calText} ${calText.innerText.length} (length)`);
}

// n. Sumar
let sumar = (a, b) => a + b;

// n. restar
let restar = (a, b) => a - b;

// n. multiplicar
let multiplicar = (a, b) => a * b;

// n. dividir
let dividir = (a, b) => a / b;
