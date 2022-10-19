window.addEventListener("load", function(){
    const form = document.querySelector('#form_crear');
    const ciudad = document.querySelector("#ciudad");
    const pais = document.querySelector("#pais");
    const user = document.querySelector('#user')
    const date = document.querySelector('#date');

    form.addEventListener('submit', function(evento){
      
        
        if (ciudad.value === ""){
            console.log('La ciudad no puede estar vacio');
            const name = document.querySelector('.ciudad_v');
            name.style.display = 'block';
        }
        if (pais.value === ""){
            console.log('El pais no puede estar vacio');
            const name = document.querySelector('.pais_v');
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
    })
    form.addEventListener('input', function(){
        const date_string = date.value.split("-");
        const d = new Date();
        const y = d.getDay();
        const f = parseInt(date_string[2]); 
        const g = f - 1;
        console.log(f)
        console.log(g)
        if (f <= g) {
            console.log('nice');
            const hidden = document.querySelector('.dob-hidden');
            hidden.style.display = 'none';
        }
    })
})
