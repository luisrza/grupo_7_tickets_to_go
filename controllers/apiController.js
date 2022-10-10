const path = require('path');
let db = require("../database/models")
const fs = require('fs');

const apiController = {
eventos: (req, res) => {
       db.Evento.findAll().
       then(eventos=> {
        return res.json({
            count: eventos.length,
            eventos : eventos,
            status: 200

        })
       })
        
    }
,

detalleEvento: (req, res) => {
    db.Evento.findByPk(req.params.id).
       then(evento=> {
        return res.json({
            evento : evento,
            status: 200

        })
       })   
    
},


usuarios: (req, res) => {
       
    db.Usuario.findAll().
       then(usuarios=> {
       
        return res.json({
            count: usuarios.length,
            users : usuarios,
            status: 200

        })
       })
},



detalleUsuario: (req, res) => {
       
    db.Usuario.findByPk(req.params.id).
       then(usuario=> {
        
        user = {}
        user.nombre = usuario.nombre
        user.user = usuario.user
        user.url =  `${usuario.avatar}`
        user.nacimiento = usuario.nacimiento
        user.email = usuario.email

        return res.json({
            user : user,
            status: 200

        })
       })
}


}



module.exports = apiController;