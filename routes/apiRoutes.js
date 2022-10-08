const express = require ('express');
const router = express.Router();
const path = require('path');

const apiController = require('../controllers/apiController');

router.get('/eventos', apiController.eventos);
router.get('/eventos/:id', apiController.detalleEvento);
router.get('/usuarios', apiController.usuarios);
router.get('/usuarios/:id', apiController.detalleUsuario);





module.exports=router;