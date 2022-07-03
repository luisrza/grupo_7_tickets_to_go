const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve(__dirname,'./public');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/usersRoutes');

const index404Path = path.resolve(__dirname,'./views/404.html');

app.use(express.static(publicPath));



app.use('/', mainRoutes);
app.use('/products', productRoutes );
app.use('/users', usersRoutes);

app.get('*', (req, res) => {
    res.sendFile(index404Path);
});

//escuchando
app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

