const express = require ('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')
const usersController = require('../controllers/usersController');


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
router.get('/usuarioNoExiste', usersController.usuarioNoExiste);
router.get('/detalleUsuario/:id', authMiddleware, usersController.detalleUsuario);
//router.get('/detalleUsuario', authMiddleware, usersController.detalleUsuario);
router.get('/eliminarUsuario/:id', usersController.eliminarUsuario);
router.get('/editarUsuario/:id', usersController.editarUsuario);
router.post('/editandoUsuario/:id',upload.single('avatar'), usersController.editandoUsuario);

router.get('/register', guestMiddleware, usersController.register);
router.post('/register',  upload.single('avatar'), usersController.create);
router.get('/registrado', usersController.registrado);
router.get('/logout', usersController.logout);

// parametros para el PUT
//router.get('/:id/editar', usersController.editar);
//router.get('/:id/actualizar', usersController.actualizar);


module.exports=router;