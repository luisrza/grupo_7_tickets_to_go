const express = require('express');

const app = express();

const path = require('path');

const port = 4000;

const indexPath = path.resolve(__dirname,'./views/index.html');
const publicPath = path.resolve(__dirname,'./public');
const registerPath = path.resolve(__dirname,'./views/register.html');
const contactoPath = path.resolve(__dirname,'./views/contacto.html');
const loginPath = path.resolve(__dirname,'./views/login.html');
const eventosPath = path.resolve(__dirname,'./views/eventos.html');
const index404Path = path.resolve(__dirname,'./views/404.html');
const carritoPath = path.resolve(__dirname,'./views/carrito.html');


/*npm install express --save <---para bajar express */

app.use(express.static(publicPath));

//Index
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.get('/index', (req, res) => {
    res.sendFile(indexPath);
});

//Register
app.get('/register', (req, res) => {
    res.sendFile(registerPath);
});

//Login
app.get('/login', (req, res) => { 
    res.sendFile(loginPath);
});

//nostros
app.get('/nosotros', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/nosotros.html'));
});

//contacto
app.get('/contacto', (req, res) => {
    res.sendFile(contactoPath);
}); 



//carrito
app.get('/carrito', (req, res) => {
    res.sendFile(carritoPath);
});

//eventos
app.get('/eventos', (req, res) => {
    res.sendFile(eventosPath);
});
//
app.get('*', (req, res) => {
    res.sendFile(index404Path);
}); //


//escuchando
app.listen(port, () => {
    console.log('listening on http://localhost:'+port);
});


console.log(contactoPath);
console.log(indexPath);