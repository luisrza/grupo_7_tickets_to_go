const express = require('express');
const app = express();

const path = require('path');

const port = 4000;

const indexPath= path.resolve(__dirname,'./views/index.html');
const publicPath= path.resolve(__dirname,'./public');
const registerPath= path.resolve(__dirname,'./views/register.html');
const contactoPath= path.resolve(__dirname,'./views/contacto.html');
const loginPath= path.resolve(__dirname,'./views/login.html');
//const indexEventos= path.resolve(__dirname,'./views/eventos.html');
//const index404= path.resolve(__dirname,'./views/404.html');

//const indexCarrito= path.resolve(__dirname,'./views/carrito.html');
//const indexEvento= path.resolve(__dirname,'./views/evento.html');

/*npm install express --save <---para bajar express */

app.use(express.static(publicPath));

//Index
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

//Register
app.get('/register', (req,res)=>{
    res.sendFile(registerPath);
});

//Login
app.get('/login', (req,res)=>{ 
    res.sendFile(loginPath);
});

//Register
app.get('/aboutus', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/aboutus.html'));
});

//contacto
app.get('/contacto', (req, res) => {
    res.sendFile(contactoPath);
}); 

/*
//404
app.get('*', (req, res) => {
    res.sendFile(index404);
}); 

//carrito
app.get('/carrito', (req, res) => {
    res.sendFile(indexCarrito);
});

//evento
app.get('/evento', (req, res) => {
    res.sendFile(indexEvento);
});

//eventos
app.get('/eventos', (req, res) => {
    res.sendFile(indexEventos);
});

*/

//escuchando
app.listen(port, () => {
    console.log('listening on http://localhost:'+port);
});

<<<<<<< HEAD
console.log(carritoPath);
console.log(eventosPath);
=======

console.log(contactoPath);
console.log(indexPath);
>>>>>>> parent of 862d6ae (nuevos cambios en app)
