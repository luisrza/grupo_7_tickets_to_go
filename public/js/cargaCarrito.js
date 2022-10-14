window.addEventListener("load", function(){

    
    const form = document.querySelector('#carrito');
    
    form.addEventListener('submit', function(){
        
        id = form.id_evento.value;
        evento ='Cantidad de Tickets: '+ form.nro_tickets.value+ ' - Fecha: '+form.fecha_evento.value+ '- Ciudad del Evento: '+form.ciudad_evento.value ;
       

        localStorage.setItem(id,evento)
        
    
        
    })
    
    console.log(localStorage)
    
    
})
