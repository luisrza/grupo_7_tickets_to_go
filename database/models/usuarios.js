module.exports = function(sequelize, dataTypes){

    let alias = "Usuario"

    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        user: {
            type: dataTypes.STRING
        },
        nacimiento: {
            type: dataTypes.DATE
                },
        password: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.INTEGER  //seria un booliano pero se recomienta hacerlo numerico y poner 1 para true y 0 para false
        },
        avatar: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.INTEGER
        }


    }

    let config ={
        tableName: "tablaUsuarios",
        timestamps: false
    }

    let Usuario = sequelize.define(alias,cols,config);


    return Usuario
    


}