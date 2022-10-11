window.addEventListener("load", function(){

    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".nav-bar");

    burger.addEventListener("click", function(e){

        const punto = e.target;
        console.log(punto);

        burger.style.display = "none";
        navbar.style.display = "flex";
    })

})

