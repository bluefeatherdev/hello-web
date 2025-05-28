// ...
console.log("Hello World!");

// 1. Construcción servidor HTTP con Express
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

// 2. package.json y configuración scripts
// ver package.json

// 3. Rutas y manejo de datos
app.post('/formulario', (req, res) => {
    const {id, nombre, apellido, titulo, autor, editorial, año} = req.body;
    if (!id || !nombre || !apellido || !titulo || !autor || !editorial || !año) return res.redirect('/error.html');
    console.log(req.body);
    console.log(`Datos recibidos del USUARIO: ${id} - ${nombre} - ${apellido}`);
    console.log(`Datos recibidos del LIBRO: ${titulo} - ${autor} - ${editorial} - ${año}`);
    res.send(`Datos recibidos: ${id} - ${nombre} - ${apellido} | ${titulo} - ${autor} - ${editorial} - ${año}`);
})
