function guestMiddleware (req, res, next){
    if(req.session.userLogged){
        id = req.session.userLogged.id
        res.redirect('/users/detalleUsuario/'+id)
    }

next()

}
module.exports=guestMiddleware