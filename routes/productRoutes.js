const express = require ('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/eventos', productController.eventos);

module.exports=router;