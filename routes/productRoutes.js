const express = require ('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/eventos', productController.eventos);

router.get('/crearEvento', productController.crearEvento);

router.get('/:idProductos', productController.dinamicas);

router.get('/editarEvento/:idEvento', productController.editarEvento);
router.put('/editarEvento/', productController.editarEvento);

module.exports=router;
