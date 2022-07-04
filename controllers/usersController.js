const path = require('path');

const usersController = {
    login: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/login.html'));
        res.render('./users/login');
    },

    register: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/register.html'));
        res.render('./users/register');
    },

    carrito: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/carrito.html'));
        res.render('./users/carrito');
    },
    

}


module.exports = usersController;