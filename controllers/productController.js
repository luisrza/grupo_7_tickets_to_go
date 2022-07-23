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
        newEvento.agotado = "No";

        let imagen = req.file;
		newEvento.image = imagen.filename;
		
   
        eventos.push(newEvento);

        fs.writeFileSync(productsFilePath, JSON.stringify(eventos, null, 2));

        res.redirect('eventos');


      
    },
    editarEvento: (req, res) => {
        let id= req.params.id;
        let eventoToEdit = eventos.find(eventoToEdit=> eventoToEdit.id == id);
        console.log("new values",eventoToEdit);
        /*
        for(i=0;i<eventos.length;i++){
            if(eventos[i].id==id){
                eventoToEdit=eventos[i];
            }
        }
        */

        res.render('./products/editarEvento', {eventoToEdit: eventoToEdit});
           
    },
    editandoEvento: (req, res) => {
        let id= req.params.id;
        let newProduct = req.body;
        let eventoToEdit = eventos.find(eventoToEdit=> eventoToEdit.id == id);
        console.log ("id", id);
        console.log ("editando", eventoToEdit);
        
        let imagen = req.file;
        newProduct.image = imagen.filename;
        console.log("new values",newProduct);
        newProduct.id= id;

        for (let i=0; i<eventos.length; i++){
            const element= eventos[i];
            if (element.id==id){
               eventos[i] = newProduct;
             };
         }

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