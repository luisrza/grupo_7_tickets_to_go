const path = require('path');

const mainController = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    },

    contacto: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/contacto.html'));
    },

    nosotros: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/nosoos.html'));
    },
}


module.exports = mainController;