const express = require ('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/img'))
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
    })
var upload = multer({ storage: storage })

// rutas para eventos y detalle de eventos
router.get('/eventos', productController.eventos);
router.get('/eventos/detalles/:id', productController.detalleEventos);

//rutas para crear eventos 
router.get('/crearEvento', productController.crearEvento);
router.post('/creandoEvento', upload.single('image'), productController.creandoEvento);

//rutas para editar eventos
router.get('/editarEvento/:id', productController.editarEvento);
router.put('/editarEvento/:id', upload.single('image'), productController.editandoEvento);

//ruta para eliminar evento
router.delete('/eliminarEvento/:id', productController.eliminarEvento);

module.exports=router;
