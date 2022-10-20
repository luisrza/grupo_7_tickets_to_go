window.addEventListener("load", function(){

    form = document.querySelector('#carrito')
    contador = document.querySelector('#nro_tickets')
    console.log(form)
    console.log(contador.value)

    form.addEventListener('submit', function(evento){
        console.log(contador.value)
        if( contador.value === "" ){
            console.log('El nombre no puede estar vacio');
            const hidden = document.querySelector('.cont_v');
            hidden.style.display = 'block';
            evento.preventDefault();
        }
        else {
            form.submit()
        }
    })
})