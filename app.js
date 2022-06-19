const express = require('express');
const app = express();

const path = require('path');

const port = 4000;

const indexPath= path.resolve(__dirname,'./views/index.html');
const publicPath= path.resolve(__dirname,'./public');
const indexRegister= path.resolve(__dirname,'./views/register.html');
const indexLogin= path.resolve(__dirname,'./views/login.html');
const index404= path.resolve(__dirname,'./views/404.html');
const indexContacto= path.resolve(__dirname,'./views/contacto.html');
const indexCarrito= path.resolve(__dirname,'./views/carrito.html')
const indexEvento= path.resolve(__dirname,'./views/evento.html')
const indexEventos= path.resolve(__dirname,'./views/eventos.html')

/*npm install express --save <---para bajar express */

app.use(express.static(publicPath));

//Index
app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

//Register
app.get('/register', (req,res)=>{
    res.sendFile(indexRegister);
});

//Login
app.get('/login', (req,res)=>{ 
    res.sendFile(indexLogin);
}); 

//404
app.get('*', (req, res) => {
    res.sendFile(index404);
}); 

//contacto
app.get('/contacto', (req, res) => {
    res.sendFile(indexContacto);
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



//escuchando
app.listen(port, () => {
    console.log('listening on http://localhost:'+port);
});
