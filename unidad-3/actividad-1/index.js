// Prueba de consola con Node.js
console.log("¡Hola, desde la consola!");
console.log("¡Buenas noches!");

// Importación de Módulos
const {frutas} = require('./app.js');
frutas.forEach((fruta) => console.log('Fruta:', fruta));

const {carros} = require('./app.js');
carros.forEach(marca => console.log(`Marca: ${marca}`));

const {modelos} = require('./app.js');
modelos.forEach(modelo => console.log(`Modelo: ${modelo}`));

// Prueba módulo nodemon
console.log("Hello World! 🌿🖥️");
console.log("CTRL + C para detener nodemon en VS Code Terminal");
