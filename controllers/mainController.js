const path = require('path');

const mainController = {
    index: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/index.html'));
        res.render('index');
    },

    contacto: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/contacto.html'));
        res.render('contacto');
    },

    nosotros: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/nosotros.html'));
        res.render('nosotros');
    },
}


module.exports = mainController;