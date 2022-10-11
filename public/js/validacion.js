const e = require("express");

window.addEventListener("load", function(){

    const form = document.querySelector('#form_reg');
    const nombre = document.querySelector("#nombre");
    const user = document.querySelector('#user')
    const dob = document.querySelector('#dob');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const terms = document.querySelector('#terms');
    const pass_min = 6;

    form.addEventListener('submit', function(e){
        if (nombre.value == ""){
            console.log('El nombre no puede estar vacio');
        }
        if (password.value.length < 8){
            console.log('Hubo un error en el password')
            evento.preventDefault();
          }
        nombre.addEventListener('focus', function(){
            console.log('hola');
            nombre.style.backgroundColor = 'pearl';
          })
    })
})
