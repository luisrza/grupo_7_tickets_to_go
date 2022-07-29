const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
var users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login: (req, res) => {
        res.render('./users/login');
    },
    logueando: (req, res) => {
        
     email = req.body.email
     noExiste = true
    
     for (i=0;i<users.length;i++){
        if (users[i].email==email){
         userLogin = users[i]
        noExiste=false
         res.render('users/detalleUsuario',{userLogin})
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

    res.render('users/editarUsuario',{userToEdit})

        
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
            nombre: req.body.nombre,
            user: req.body.user,
            nacimiento: req.body.nacimiento,
            pass: req.body.pass,
            avatar: userToEdit.avatar

        }
        console.log(req.file)
       
       if (req.file) {userEdited.avatar = req.file.filename}
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
        
        res.render('./users/register');
    },

    carrito: (req, res) => {
        //res.sendFile(path.join(__dirname, '../views/users/carrito.html'));
        res.render('./users/carrito');
    },
    
    create: (req, res) => {
       
        let newUsuario = {
            id: Date.now(),
            nombre: req.body.nombre,
            user: req.body.user,  
            nacimiento: req.body.nacimiento,
            email: req.body.email,
            password: req.body.pass
        }
        let avatar = req.file;
		newUsuario.avatar = avatar.filename;
        
        users.push(newUsuario)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
       
        res.redirect('./registrado'); 

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