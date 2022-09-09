const path = require('path');
const fs = require('fs');
let db = require("../database/models")

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.emailCookie
    let userFromCookie=undefined
    
    if (emailInCookie){
    db.Usuario.findOne({where:{email:emailInCookie}})
    .then((resul)=>{userFromCookie = resul})
    }
    
    if (userFromCookie!=undefined){
        req.session.userLogged = userFromCookie
        
    }

    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged; 
    }

next()

}
module.exports=userLoggedMiddleware