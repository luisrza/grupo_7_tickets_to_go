const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')

let db = require("../database/models")

const productController = {
    eventos: (req, res) => {
        userLogged = req.session.userLogged
        db.Evento.findAll().
        then(function(eventos){
           
           return res.render('./products/eventos',{
            eventos,
            userLogged
        })
        })
    },
    detalleEventos: (req, res) => {
        userLogged = req.session.userLogged
        
        let id = req.params.id;
        db.Evento.findByPk(id).then(function(evento){
            //return res.json(evento)
            return res.render('./products/detallesEvento',{
                evento, 
                userLogged
            })
        })
        
    },
   
    crearEvento: (req, res) => {
        res.render('./products/crearEvento')
    },
    creandoEvento: (req, res) => {
        const validaciones = validationResult(req)
        if (validaciones.errors.length > 0){


            return res.render ('./products/crearEvento',{
                errors : validaciones.mapped(),
                oldData : req.body
            })
        }
        db.Evento.create({
            city: req.body.city,
            country: req.body.country,
            date: req.body.date,
            price: req.body.price,
            currency: req.body.currency,
            description: req.body.description,
            agotado: 0,
            image: req.file.filename
        }).then(function(){
            return res.redirect('eventos'); 
        })
        
      
    },
    editarEvento: (req, res) => {
        let id= req.params.id;

        db.Evento.findByPk(id).then(function(eventoToEdit){
            return res.render('./products/editarEvento', {eventoToEdit});

        })
           
    },
    editandoEvento: (req, res) => {
        

        let id= req.params.id;
        
        db.Evento.update({
            city: req.body.city,
            country: req.body.country,
            date: req.body.date,
            price: req.body.price,
            currency: req.body.currency,
            description: req.body.description,
            agotado: req.body.agotado,
            image: req.file.filename
        },
        {where:{id}})
        
         res.redirect('/products/eventos');
           
    },

    eliminarEvento: (req, res) => {
        
        id = req.params.id

        db.Evento.destroy({
            where: {id}
        })
        
        res.redirect('/products/eventos');
           
    }

}

module.exports = productController;