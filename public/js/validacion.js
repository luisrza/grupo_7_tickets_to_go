window.addEventListener("load", function(){

    const form = document.querySelector('#form_reg');
    const nombre = document.querySelector("#nombre");
    const user = document.querySelector('#user')
    const dob = document.querySelector('#fechaNacimiento');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmacion = document.querySelector('#confirmacion');
    const terms = document.querySelector('#terms');
    const pass_min = 6;
    const admin = document.querySelector('.admin');
    const ticket ="@ticketstogo.com";

    email.addEventListener('keyup', function(){
        let correo = email.value;
        if (correo === ticket){
            admin.style.display = 'block';
        }
    })

    confirmacion.addEventListener('keyup', function(){
        if (password.value.length < pass_min){
            console.log('Hubo un error en el password');
            const hidden = document.querySelector('.pass-hidden');
            hidden.style.display = 'block';
        }
        if (password.value.length === confirmacion.value.length){
            const hidden = document.querySelector('.pass2-hidden');
            hidden.style.display = 'none';
        }
        if (password.value.length !== confirmacion.value.length){
            console.log('Hubo un error en el password');
            const hidden = document.querySelector('.pass2-hidden');
            hidden.style.display = 'block';
        }
    })

    form.addEventListener('input', function(){
        const dob_string = dob.value.split("/");
        const d = new Date();
        const y = d.getFullYear(); 
        if (parseInt(dob_string[0]) <= y -18) {
            const hidden = document.querySelector('.dob-hidden');
            hidden.style.display = 'none';
        }
        if (parseInt(dob_string[0]) > y -18) {  
            const hidden = document.querySelector('.dob-hidden');
            hidden.style.display = 'block';
        }
        if (nombre.value.length > 1){
            console.log('El nombre no puede estar vacio');
            const name = document.querySelector('.nombre-hidden');
            name.style.display = 'none';
        }
        if (password.value.length > pass_min){
            console.log('Hubo un error en el password');
            const hidden = document.querySelector('.pass-hidden');
            hidden.style.display = 'none';
        } 
    })

    form.addEventListener('submit', function(evento){
        if (nombre.value === ""){
            console.log('El nombre no puede estar vacio');
            const name = document.querySelector('.nombre-hidden');
            name.style.display = 'block';
        }
        if (user.value == ""){
            console.log('El usuario no puede estar vacio');
            const usuario = document.querySelector('.usuario-hidden');
            usuario.style.display = 'block';
        }
        if (email.value === ""){
            console.log('El nombre no puede estar vacio');
            const email = document.querySelector('.email-hidden');
            email.style.display = 'block';
        }
        evento.preventDefault();
    })
})
