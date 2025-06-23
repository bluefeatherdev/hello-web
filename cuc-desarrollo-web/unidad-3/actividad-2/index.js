// Prueba de consola
console.log('¡Hola, mundo!');

// Crear un servidor HTTP simple
// const http = require('http');
// const portHTTP = 3000;

// const server = http.createServer((req, res) => {
//     res.end('¡Respuesta desde el servidor HTTP!');
// });

// server.listen(portHTTP, () => {
//     console.log(`Servidor ejecutándose en el puerto ${port}`)
// });

// Crear un servidor Express
const express = require('express');
const app = express();
const portExpress = 3001;

app.use(express.static('public')); // Middleware para servir archivos estáticos
app.use(express.urlencoded({extended: true})); // Middleware para parsear datos de formularios POST

app.get('/', (req, res) => {
    res.send('¡Hola desde Express!');
});

app.listen(portExpress, () => {
    console.log(`Express App ejecutándose en el puerto: ${portExpress}`);
});

// Probando rutas con Express
app.get('/unicosta', (req, res) => {
    res.send('¡Hola desde la página de Unicosta!');
})

// Probando directorio estático 'public' con Express
app.get('/formulario', (req, res) => {
    // console.log(req.query);
    // console.log(`Datos recibidos: ${req.query.nombre} - ${req.query.apellido}`);
    res.send(`Datos recibidos: ${req.query.nombre} - ${req.query.apellido}`);
})

app.post('/formulario', (req, res) => {
    // console.log(req.body);
    // console.log(`Datos recibidos: ${req.body.nombre} - ${req.body.apellido}`);
    const {nombre, apellido} = req.body;
    // if (!nombre || !apellido) return res.send('Faltan datos en el formulario...');
    if (!nombre || !apellido) return res.redirect('/error.html');
    res.send(`Datos recibidos: ${req.body.nombre} - ${req.body.apellido}`);
})
