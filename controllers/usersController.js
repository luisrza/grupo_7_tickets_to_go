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
    
    create: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/carrito.html'));
        //res.render('./users/carrito');
        //res.send(req.body);
        let usuario = {
            nombre: req.body.nombre,
            user:  req.body.user,  
        }
        // Hay que guardarla en algun lado.
        res.send(usuario);
        // res.redirect('/users/list'); aca vamos a un listado de usuario dnd guardariamos todo.

    },

    editar: (req, res) => {
    },

    actualizar: (req, res) => {
    },



}


module.exports = usersController;