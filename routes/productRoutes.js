const express = require ('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/eventos', productController.eventos);

router.get('/crearEvento', productController.crearEvento);
router.get('/editarEvento', productController.editarEvento);
router.get('/:idProductos', productController.dinamicas);

module.exports=router;
