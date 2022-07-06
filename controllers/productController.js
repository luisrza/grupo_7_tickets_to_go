const path = require('path');
const eventos = require ('./eventos');

const productController = {
    eventos: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/products/eventos.html'));
        res.render('./products/eventos',{eventos})
    },

    dinamicas: (req, res) => {
        let idProductos= req.params.idProductos;
        res.send("ALOHA"+idProductos);

    },

}

module.exports = productController;