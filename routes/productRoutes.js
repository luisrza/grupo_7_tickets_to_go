const express = require ('express');
const router = express.Router();
const { check } = require ('express-validator')

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

validEvento = [
    check('city').notEmpty().withMessage('Debe ingresar la ciudad donde se realizará el evento'),
    check('country').notEmpty().withMessage('Debe ingresar el pais donde se realizará el evento'),
    check('date').notEmpty().withMessage('Debe ingresar la fecha en que se realizará el evento'),
    check('price').notEmpty().withMessage('Debe ingresar el precio que cuesta el ingreso').bail().
        isNumeric().withMessage("Debe ingresar un número no letras"),
    check('currency').notEmpty().withMessage('Debe ingresar la moneda en que se paga'),
    check('description').notEmpty().withMessage('Debe ingresar la descripción del evento').bail().
        isLength({ min: 100 }).withMessage('Debe ingresar al menos 100 caracteres'),
    check('image').custom((value, { req })=>{
        let image = req.file
        if (!image){
            throw new Error ('Debe subir una imagen del evento')
        }
        return true;

    })
]

// rutas para eventos y detalle de eventos
router.get('/eventos', productController.eventos);
router.get('/eventos/detalles/:id', productController.detalleEventos);

//rutas para crear eventos 
router.get('/crearEvento', productController.crearEvento);
router.post('/creandoEvento', upload.single('image'), validEvento, productController.creandoEvento);

//rutas para editar eventos
router.get('/editarEvento/:id', productController.editarEvento);
router.put('/editarEvento/:id', upload.single('image'), productController.editandoEvento);

//ruta para eliminar evento
router.delete('/eliminarEvento/:id', productController.eliminarEvento);

module.exports=router;
