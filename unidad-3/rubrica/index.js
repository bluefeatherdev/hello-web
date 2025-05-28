// ...
console.log("Hello World!");

// 1. Construcción servidor HTTP con Express
const express = require('express');
const app = express();
const portExpress = 3001;
const fs = require('fs'); // 5. file system para archivos txt

app.use(express.static('public')); // 3. Middleware para servir archivos estáticos
app.use(express.urlencoded({extended: true})); // 6. Middleware para parsear datos de formularios POST

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
    // 4. Campos del formulario requeridos
    // Por hacer: validar de un modo más simple
    const {id, nombre, apellido, titulo, autor, editorial, año} = req.body;
    if (!id || !nombre || !apellido || !titulo || !autor || !editorial || !año) return res.redirect('/error.html');
    console.log(req.body);
    // 5. Guardar datos en un archivo txt
    // 7. Estructura del archivo txt 
    const text = `${id}, ${nombre}, ${apellido}, ${titulo}, ${autor}, ${editorial}, ${año}`;
    fs.writeFile(`data/id_${id}.txt`, text, (error) => {
        if (error) {
            console.error('Error al escribir el archivo txt:', error);
            return res.status(500).send('Error al escribir el archivo txt...');
        }
        console.log('¡Archivo txt creado exitosamente!');
        // 8. Descargar archivo txt
        res.download(`data/id_${id}.txt`);
        // res.send(`¡Archivo txt creado exitosamente! | Datos: ${text}`);
    });
    // console.log(`Datos recibidos del LIBRO: ${titulo} - ${autor} - ${editorial} - ${año}`);
    // res.send(`Datos recibidos: ${id} - ${nombre} - ${apellido} | ${titulo} - ${autor} - ${editorial} - ${año}`);
})
