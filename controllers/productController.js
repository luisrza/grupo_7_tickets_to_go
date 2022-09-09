const fs = require('fs');
const path = require('path');

let db = require("../database/models")

const productController = {
    eventos: (req, res) => {
        db.Evento.findAll().
        then(function(eventos){
           //return res.json(eventos)
           return res.render('./products/eventos',{eventos})
        })
    },
    detalleEventos: (req, res) => {
        let id = req.params.id;
        db.Evento.findByPk(id).then(function(evento){
            //return res.json(evento)
            return res.render('./products/detallesEvento',{evento})
        })
        
    },
   
    crearEvento: (req, res) => {
        res.render('./products/crearEvento')
    },
    creandoEvento: (req, res) => {
        db.Evento.create({
            city: req.body.city,
            country: req.body.country,
            date: req.body.date,
            prize: req.body.prize,
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
            prize: req.body.prize,
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