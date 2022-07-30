const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
var users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');

const usersController = {
    login: (req, res) => {
        oldData = {email: 'sin_email'}
        res.render('./users/login',{oldData});
    },
    logueando: (req, res) => {
        
     email = req.body.email
     noExiste = true
    
     for (i=0;i<users.length;i++){
        if (users[i].email==email){
         userLogin = users[i]
        noExiste=false
        passEncriptada =userLogin.password 
        let check = bcrypt.compareSync(req.body.pass, passEncriptada);
        if (check==true){res.render('users/detalleUsuario',{userLogin})}
        else {
            oldData = {email: 'sin_email'}
            if(req.body.email){oldData.email=req.body.email}
           
            res.render('./users/login',{oldData})}
         
     } 
    } 
     if (noExiste == true){res.redirect('usuarioNoExiste')}
    },


    detalleUsuario: (req,res) => {
        res.render('users/detalleUsuario')

    },
    editarUsuario: (req,res) => {

        id = req.params.id
        
        for (i=0;i<users.length;i++){
            if (users[i].id==id){
                userToEdit = users[i]
            }
        }
        error = {pass: ''}
    res.render('users/editarUsuario',{userToEdit,error})

        
    },    
    editandoUsuario: (req,res) => {

        id = req.params.id
        console.log(id)
        for (i=0;i<users.length;i++){
            if (users[i].id==id){
                userToEdit = users[i]
            }
        }
        userEdited = {
            id: userToEdit.id,
            nombre: userToEdit.nombre,
            user: userToEdit.user,
            nacimiento: userToEdit.nacimiento,
            pass: userToEdit.pass,
            avatar: userToEdit.avatar,
            email: userToEdit.email

        }
        
        if (req.body.nombre){userEdited.nombre=req.body.nombre}
        if (req.body.user){userEdited.user=req.body.user}
        if (req.body.nacimiento){userEdited.nacimiento=req.body.nacimiento}
        if (req.body.email){userEdited.email=req.body.email}
        if (req.file) {userEdited.avatar = req.file.filename}

        if (req.body.pass && req.body.pass_confirm && req.body.pass===req.body.pass_confirm) {
            userEdited.password = bcrypt.hashSync(req.body.pass, 10)
            
        newUsers = [];
        newUsers.push(userEdited)
            for (i=0;i<users.length;i++){
                if (users[i].id!=id){
                    newUsers.push(users[i]) 
                }
            }
            users= newUsers
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            userLogin = userEdited
    
            
        res.render('users/detalleUsuario',{userLogin})
        }
        else {
            error = {pass : 'pass_no_coinciden'}
            res.render('users/editarUsuario',{userToEdit})
        }

       

        
    },  
    eliminarUsuario: (req,res) => {

        id = req.params.id
        newUsers=[]
        for (i=0;i<users.length;i++){
            if (users[i].id!=id){
                newUsers.push(users[i])
            }
        }
        users = newUsers
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.render('users/eliminarUsuario')

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
    let passEncriptada = bcrypt.hashSync(req.body.pass, 10);  
     

        let newUsuario = {
            id: Date.now(),
            nombre: req.body.nombre,
            user: req.body.user,  
            nacimiento: req.body.nacimiento,
            email: req.body.email,
            
        }

        for (i=0;i<users.length;i++){
            if(users[i].email==newUsuario.email){
                error = {email: 'repetido'}
                res.render('./users/register',{error})
            }
        }

        if (req.file){let avatar = req.file;
            newUsuario.avatar = avatar.filename;}
        else {newUsuario.avatar = 'default.png'}    
        
        
        if (req.body.pass===req.body.pass_confirm){
        newUsuario.password=passEncriptada
        users.push(newUsuario)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
           
        res.redirect('./registrado'); 
        }
        else {
            error = {email: 'contrasenias'}
            
            res.render('./users/register',{error,newUsuario});
        }

       

    },

    registrado:  (req, res) => {
       
        res.render('./users/registrado')
    },

    editar: (req, res) => {
    },

    actualizar: (req, res) => {
    },



}


module.exports = usersController;