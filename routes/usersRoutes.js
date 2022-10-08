const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
let db = require("../database/models")
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')
const usersController = require('../controllers/usersController');
const { check } = require('express-validator')

const validationsReg = [
    check('nombre').notEmpty().withMessage('Debe ingresar su nombre y apellido'),
    check('user').notEmpty().withMessage('Debe ingresar un nombre de usuario'),
    check('nacimiento').notEmpty().withMessage('Debe ingresar su fecha de nacimiento'),
    check('email').notEmpty().withMessage('Debe ingresar un email').bail()
                  .isEmail().withMessage("Debe ingresar un email válido"),
                check('password').custom((value, { req }) => {
        if (req.body.pass != req.body.pass_confirm){
        throw new Error('Las contraseñas ingresadas no coinciden entre sí')
             
        } return true;  
        
    })              
    
]


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/img'))
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
    })
var upload = multer({ storage: storage })

router.get('/carrito', usersController.carrito);

router.get('/login', guestMiddleware, usersController.login);
router.post('/logueando', usersController.logueando);
router.get('/usuarioYaExiste', usersController.usuarioYaExiste);
router.get('/detalleUsuario/:id', authMiddleware, usersController.detalleUsuario);
//router.get('/detalleUsuario', authMiddleware, usersController.detalleUsuario);
router.get('/eliminarUsuario/:id', usersController.eliminarUsuario);
router.get('/editarUsuario/:id', usersController.editarUsuario);
router.post('/editandoUsuario/:id',upload.single('avatar'), usersController.editandoUsuario);

router.get('/register', guestMiddleware, usersController.register);
router.post('/register',  upload.single('avatar'), validationsReg, usersController.create);
router.get('/registrado', usersController.registrado);
router.get('/logout', usersController.logout);

// parametros para el PUT
//router.get('/:id/editar', usersController.editar);
//router.get('/:id/actualizar', usersController.actualizar);


module.exports=router;