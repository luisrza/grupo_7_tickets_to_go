const path = require('path');

const productController = {
    eventos: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/eventos.html'));
    },

    dinamicas: (req, res) => {
        let idProductos= req.params.idProductos;
        res.send("ALOHA"+idProductos);

    },

}

module.exports = productController;