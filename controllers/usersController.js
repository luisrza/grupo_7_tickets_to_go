const path = require('path');
const fs = require('fs');
let db = require("../database/models")
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')


const usersController = {
    login: (req, res) => {
        
        res.render('./users/login');
    },
    logueando: (req, res) => {
        
     email = req.body.email
     
      db.Usuario.findOne({where: {email}}).then(function(resul)
        
       { if (!resul){
        errors = {}
        errors.emailNoExiste = {msg : 'El email ingresado no pertenece a nuestra Base de Datos'}
        res.render('./users/login',{errors});
       }
       else {
        
            let check = bcrypt.compareSync(req.body.pass, resul.password);
            if (check!=true){ //aca entra si esta mal la contraseña
                errors = {}
                errors.passInv = {msg : 'La contraseña ingresada no es válida'}
                oldData = req.body
                res.render('./users/login',{errors, oldData});
                
                }
            else{   //aca entra si esta ok la contraseña
               userLogin = resul
               
            req.session.userLogged = userLogin 
            //res.send(req.session)
            userLogged = req.session.userLogged  
                     
                     if (req.body.recordarMiUsuario){  //pregunta si aceptó cooquies
                    res.cookie('emailCookie',req.body.email,{maxAge : 1000*60*3})    
                    }
                    res.redirect('/')
                    //res.render('users/detalleUsuario',{userLogged})   
                }       
        }
        }
        )
    },


    detalleUsuario: (req,res) => {
        userLogged = req.session.userLogged 
        res.render('./users/detalleUsuario',{userLogged})
        
    },
    editarUsuario: (req,res) => {

        id = req.params.id
        
        db.Usuario.findByPk(id)
        .then((resul)=>{
        userToEdit = resul
        res.render('users/editarUsuario',{userToEdit})
        })
        
    },    
    editandoUsuario: (req,res) => {

      resulValidaciones = validationResult(req) 
      
      if (resulValidaciones.errors.length > 0) {
        id = req.params.id
        
        db.Usuario.findByPk(id)
        .then((resul)=>{
        userToEdit = resul
        res.render('users/editarUsuario',{userToEdit, errors : resulValidaciones.mapped()})
        })
      }
    else {  
      //si las contraseñas ingresadas coinciden

        userEdited = {} //en los siguientes renglones verifica que campos desea editar, el resto queda igual
        if (req.body.nombre){userEdited.nombre = req.body.nombre}
        if (req.body.user){userEdited.user=req.body.user}
        if (req.body.nacimiento){userEdited.nacimiento=req.body.nacimiento}
        if (req.body.email){userEdited.email=req.body.email}
        if (req.file) {userEdited.avatar = req.file.filename}
        if (req.body.pass && req.body.pass_confirm && req.body.pass===req.body.pass_confirm) {
        userEdited.password = bcrypt.hashSync(req.body.pass, 10)}
        if (req.body.admin){userEdited.admin=req.body.admin}
       
        db.Usuario.update(userEdited,{where:{id:req.params.id}})
        .then(()=>{
        req.session.destroy();
        return res.redirect('/')
        
        })
           
    }
    },  
    eliminarUsuario: (req,res) => {

        id = req.params.id
        db.Usuario.destroy({where: {id}})
        .then (()=> {return res.render('users/eliminarUsuario')})
        

    },
    usuarioYaExiste: (req,res) => {
        res.render('users/usuarioYaExiste')

    },
    register: (req, res) => {
        
        res.render('./users/register');
    },

    carrito: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/carrito.html'));
        res.render('./users/carrito');
    },
    
    create: (req, res) => {
        
        
        email = req.body.email
        db.Usuario.findOne({where: {email}})
            .then(resul => {
               
               if (resul){res.redirect('/users/usuarioYaExiste')}  //primero verificamos que no exista el mail en la base de datos
              
               else {  //de aqui en adelante si no existe en mail en la base de datos
                const resultValidReg = validationResult(req)
        
        
                if (resultValidReg.errors.length > 0){ //aca ingresa si se detecta algun error de validacion
            
            
                    return res.render ('./users/register',{
                        errors : resultValidReg.mapped(),
                        oldData : req.body
                    })
                }
            
                //VERIFICAMOS QUE AMBAS CONTRASEÑAS COINCIDAN
                if (req.body.pass===req.body.pass_confirm){
            
                    //acá encriptamos la contraseña    
                    let passEncriptada = bcrypt.hashSync(req.body.pass, 10); 
            
                    //acá cargamos foto si el usuario la carga, sino queda una foto por default
                    if (req.file){avatar_user = req.file.filename} 
                    else {avatar_user = 'default.png'}    
            
                    
                    db.Usuario.create({
                        nombre: req.body.nombre,
                        user: req.body.user,
                        email: req.body.email,
                        nacimiento: req.body.nacimiento,
                        admin: req.body.admin,
                        password: passEncriptada,
                        avatar: avatar_user
            
                    }).then(()=> {return res.redirect('./registrado')})
                   
                 
                } 
                
               }            


                    })
        
                    
                  
        
    
},

    registrado:  (req, res) => {
       
        res.render('./users/registrado')
    },

    logout: (req,res)=>{
        res.clearCookie('emailCookie');
        req.session.destroy();
        res.redirect('/')
    }



}


module.exports = usersController;