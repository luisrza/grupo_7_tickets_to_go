window.addEventListener("load", function(){

    const form = document.querySelector('#form_reg');
    const nombre = document.querySelector("#nombre");
    const user = document.querySelector('#user')
    const dob = document.querySelector('#fechaNacimiento');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const terms = document.querySelector('#terms');
    const pass_min = 6;
    const admin = document.querySelector('.admin');
    const ticket ="@ticketstogo.com";
    const dob_string = dob.value.split("/");
    const d = new Date();
    const y = d.getFullYear();

    form.addEventListener('keyup', function(){
        let correo = email.value;
        if (correo === ticket){
            admin.style.display = 'block';
        }
    })

    form.addEventListener('submit', function(evento){
        preventDefault()
        if (nombre.value == ""){
            console.log('El nombre no puede estar vacio');
            const name = document.querySelector('.nombre-hidden');
            name.style.display = 'block';
        }
        if (user.value == ""){
            console.log('El usuario no puede estar vacio');
            const usuario = document.querySelector('.usuario-hidden');
            usuario.style.display = 'block';
        }
        if (password.value.length < pass_min){
            console.log('Hubo un error en el password');
            const hidden = document.querySelector('.pass-hidden');
            hidden.style.display = 'block';
        } 
        if (parseInt(dob_string[0]) > y -18) 
        {
            const hidden = document.querySelector('.dob-hidden');
            hidden.style.display = 'block';
        }
    })
})
