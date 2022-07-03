const express = require ('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/carrito', usersController.carrito);
router.get('/login', usersController.login);
router.get('/register', usersController.register);


module.exports=router;