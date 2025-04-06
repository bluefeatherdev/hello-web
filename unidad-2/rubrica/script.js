// JavaScript

// 0. Leer input calculadora
let calText = document.getElementById("calText");
console.log(`calText: ${calText} ${calText.innerText}`);

let calWrite = (text) => {
    console.log(`calWrite: ${text} ${typeof text}`)
    if (calText.innerText == "0") {
        calText.innerText = text;
    } else {
        calText.innerText += text;
    }
}

// 1. Sumar
let sumar = (a, b) => a + b;

// 2. restar
let restar = (a, b) => a - b;

// 3. multiplicar
let multiplicar = (a, b) => a * b;

// 4. dividir
let dividir = (a, b) => a / b;
