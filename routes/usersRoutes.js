const express = require ('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/carrito', usersController.carrito);

router.get('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/register', usersController.create);


// parametros para el PUT
//router.get('/:id/editar', usersController.editar);
//router.get('/:id/actualizar', usersController.actualizar);


module.exports=router;