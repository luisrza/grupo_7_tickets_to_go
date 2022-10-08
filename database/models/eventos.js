module.exports = function(sequelize, dataTypes){

    let alias = "Evento"

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        city: {
            type: dataTypes.STRING
        },
        country: {
            type: dataTypes.STRING
        },
        date: {
            type: dataTypes.DATE
        },
        price: {
            type: dataTypes.INTEGER
        },
        currency: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        agotado: {
            type: dataTypes.INTEGER  //seria un booliano pero se recomienta hacerlo numerico y poner 1 para true y 0 para false
        },
        image: {
            type: dataTypes.STRING
        }


    }

    let config ={
        tableName: "tablaeventos",
        timestamps: false
    }

    let Evento = sequelize.define(alias,cols,config);


    return Evento
    


}