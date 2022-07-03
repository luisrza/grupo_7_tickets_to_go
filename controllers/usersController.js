const path = require('path');

const usersController = {
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/login.html'));
    },

    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/register.html'));
    },

    carrito: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/users/carrito.html'));
    },
}


module.exports = usersController;