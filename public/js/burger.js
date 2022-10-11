window.addEventListener("load", function(){

    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".nav-bar");
    const arrowOut = document.querySelector(".arrowOut");

    burger.addEventListener("click", function(e){

        const punto = e.target;
        burger.style.display = "none";
        navbar.style.display = "flex";
        arrowOut.style.display = "flex";
    })

    arrowOut.addEventListener("click", function(e){

        const punto = e.target;
        burger.style.display = "block";
        navbar.style.display = "none";
        arrowOut.style.display = "none";
    })
})


