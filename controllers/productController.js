
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/eventos.json');
var eventos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    eventos: (req, res) => {
        
        res.render('./products/eventos',{eventos})
    },
    detalleEventos: (req, res) => {
        let place = req.params.id;
        for (i=0;i<eventos.length;i++){
            if(eventos[i].place == place)
            {evento=eventos[i]}
        }
        
        res.render('./products/detallesEvento',{evento})
    },
   
    crearEvento: (req, res) => {
        res.render('./products/crearEvento')
    },
    creandoEvento: (req, res) => {
        let newEvento = req.body;
        

        newEvento.id = Date.now();
        newEvento.agotado = "No"

        let imagen = req.file;
		newEvento.image = imagen.filename;
		
   
        eventos.push(newEvento);

        fs.writeFileSync(productsFilePath, JSON.stringify(eventos, null, 2));

        res.redirect('eventos');


      
    },
    editarEvento: (req, res) => {
        let id= req.params.id
        
        for(i=0;i<eventos.length;i++){
            if(eventos[i].id==id){
                eventoToEdit=eventos[i];
            }
        }
        
        res.render('./products/editarEvento', {eventoToEdit});
           
    },
    editandoEvento: (req, res) => {
        let eventoEditado = req.body;
        
        let imagen = req.file;
        eventoEditado.image = imagen.filename
		
		let eventosNew = [];
        for (i=0;i<eventos.length;i++){
            if (eventoEditado.id != eventos[i].id){
               eventosNew.push(eventos[i])  
             };
         }
           
         eventosNew.push(eventoEditado);

         eventos = eventosNew;

         fs.writeFileSync(productsFilePath, JSON.stringify(eventos, null, 2));
        
         res.redirect('/products/eventos');
           
    },
    eliminarEvento: (req, res) => {
        
        id = req.params.id
        newEventos = [];
        for (i=0;i<eventos.length;i++) {
            if (eventos[i].id!=id){
                newEventos.push(eventos[i])
            }
        }
        eventos = newEventos;

        fs.writeFileSync(productsFilePath, JSON.stringify(eventos, null, 2));

        res.redirect('/products/eventos');
           
    }

}

module.exports = productController;