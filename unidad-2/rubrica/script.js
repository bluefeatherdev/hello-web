// JavaScript

// 0. Leer texto calculadora
const calText = document.getElementById("calText");
console.log(`calText: ${calText} ${calText.innerText}`);

// 1. Escribir texto calculadora
const calWrite = (text) => {
    console.log(`calWrite: ${text} ${typeof text}`)
    let current = calText.innerText;

    // Permitir iniciar con un número negativo (-)
    if (text === '-' && current === '0') {
        calText.innerText = '-';
        return;
    }

    // Evitar más de un punto decimal en el mismo número
    if (text === '.') {
        const lastNumber = current.split(/[\+\-\*\/]/).pop();
        if (lastNumber.includes('.')) {
            return;
        }
    }

    // Validar que no haya más de un operador seguido
    const isOperator = /[\+\-\*\/]/.test(text);
    const lastChar = current.slice(-1);
    if (isOperator && /[\+\-\*\/]/.test(lastChar)) {
        // Evitar operadores duplicados, excepto *- o /-
        if (!((lastChar === '*' || lastChar === '/') && text === '-')) {
            return;
        }
    }

    // Reemplazar el "0" inicial solo si se escribe un número
    if (current === "0" && !isNaN(text)) {
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
