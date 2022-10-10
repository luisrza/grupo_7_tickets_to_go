const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const cookies = require('cookie-parser')

// Configuracion METHOD POST, captura lo venga de un form, en objeto litera, y si queremos lo pasamos a json.

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(session({
    secret: "Tickets to go",
    resave: false,
    saveUninitialized: false
}));
app.use(cookies());
app.use(userLoggedMiddleware)
// Configuracion de METHOD-OVERRIDE para usar PUT y DELETE.

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// configuracion para el EJS

app.set("view engine","ejs");
app.set('views', path.join(__dirname,'views'));

// app.set("views", __dirname + 'nombre'); si quisieramos cambiar el destino de la carpeta dnd va a buscar.


// Configuramos para que los archivos estaticos estan en la carpeta public.

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath)); // indica que siempre href va a buscar a la carpeta public

// Aca configuramos los puertos y el hosto

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

// Requerimos los modulos de las rutas

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/usersRoutes');
const apiRoutes = require('./routes/apiRoutes');

// para poder acceder a las apis desde otras aplicaciones

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin",'*');
    res.header('Access-Control-Allow-Methods','GER, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})


// usamos las rutas

app.use('/products', productRoutes );
app.use('/users', usersRoutes);
app.use('/api', apiRoutes);
app.use('/', mainRoutes);




//escuchando

app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

