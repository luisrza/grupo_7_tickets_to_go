window.addEventListener("load", function(){

   if (localStorage.length>0){

    for (i=0;i<100;i++){
       
        evento_i = localStorage.getItem(i)
        if (evento_i != null){
            //console.log(localStorage[Object.keys(localStorage)[0]])
            const store = [Object.values(localStorage)[0]]; 
            console.log(store)
            const evento_string = store[0].split("*");
            console.log(evento_string)
            linro = 'li#nro'+i
            document.querySelector(linro).innerHTML=evento_i
    }
}
}
    else{
        document.querySelector('p.texto').innerHTML = 'Tu carrito de compras se encuentra vacío...'
    }
}) 
