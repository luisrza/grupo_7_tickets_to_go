const express = require('express');
const app = express();

const path = require('path');

const port = 4000;

const indexPath= path.resolve(__dirname,'./views/index.html');
const publicPath= path.resolve(__dirname,'./public');
const indexRegister= path.resolve(__dirname,'./views/register.html');
const indexLogin= path.resolve(__dirname,'./views/login.html');

/*npm install express --save <---para bajar express */

app.use(express.static(publicPath));

//Inicio
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
    res.sendFile(path.join(__dirname, './views/404.html'));
}); 

app.listen(port, () => {
    console.log('listening on http://localhost:'+port);
});
