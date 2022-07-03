const path = require('path');

const productController = {
    eventos: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/eventos.html'));
    },

}

module.exports = productController;