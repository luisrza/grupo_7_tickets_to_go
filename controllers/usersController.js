const path = require('path');
const fs = require('fs');
let db = require("../database/models")
const bcrypt = require('bcryptjs');

const usersController = {
    login: (req, res) => {
        oldData = {email: 'sin_email'}
        res.render('./users/login',{oldData});
    },
    logueando: (req, res) => {
        
     email = req.body.email
     
      db.Usuario.findOne({where: {email}}).then(function(resul)
        
       { if (!resul){res.redirect('usuarioNoExiste')} //aca verifica que el email exista en la base de datos
       else {
        
            let check = bcrypt.compareSync(req.body.pass, resul.password);
            if (check!=true){ //aca verifica si esta bien la contraseña
                res.send("contraseña invalida... falta escribir el codigo bien") //aca entra si esta mal la contraseña
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
        error = {pass: ''}
        res.render('users/editarUsuario',{userToEdit,error})
        })
        
    },    
    editandoUsuario: (req,res) => {
        
      if(req.body.pass===req.body.pass_confirm) {//si las contraseñas ingresadas coinciden

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
    else{ //si las contraseñas no coinciden entre si
        error = {pass : 'pass_no_coinciden'}
        res.render('users/editarUsuario',{userToEdit})
    }
   
    },  
    eliminarUsuario: (req,res) => {

        id = req.params.id
        db.Usuario.destroy({where: {id}})
        .then (()=> {return res.render('users/eliminarUsuario')})
        

    },
    usuarioNoExiste: (req,res) => {
        res.render('users/usuarioNoExiste')

    },
    register: (req, res) => {
        error = {email: ''}
        newUsuario = {
            nombre: 'Nombre y Apellido',
            user: 'Nombre de usuario',
            nacimiento: 'Fecha de Nacimiento',
            email: 'ejemplo@gmail.com'
        }
        res.render('./users/register',{error,newUsuario});
    },

    carrito: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/carrito.html'));
        res.render('./users/carrito');
    },
    
    create: (req, res) => {
    //VERIFICAMOS QUE AMBAS CONTRASEÑAS COINCIDAN
    if (req.body.pass===req.body.pass_confirm){

        //acá encriptamos la contraseña    
        let passEncriptada = bcrypt.hashSync(req.body.pass, 10); 

        //acá cargamos foto si el usuario la carga, sino queda una foto por default
        if (req.file){avatar_user = req.file.filename} 
        else {avatar_user = 'default.png'}    

        //ahora verificamos que el mail no exista ya en la base de datos (FALTA HACER)
        
        db.Usuario.create({
            nombre: req.body.nombre,
            user: req.body.user,
            email: req.body.email,
            nacimiento: req.body.nacimiento,
            admin: req.body.admin,
            password: passEncriptada,
            avatar: avatar_user

        }).then(()=> {return res.redirect('./registrado')})
       
     
    } //ESTA LLAVE CIERRA VERIFICACION DE AMBAS CONTRASENIAS
    else {
        res.send("Falta hacer el codigo si ambas contraseñas no coinciden... sorry!")

    }
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