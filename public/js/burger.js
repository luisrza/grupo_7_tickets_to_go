window.addEventListener("load", function(){

    console.log("cfgvhbjnk");

    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".nav-bar");

    burger.addEventListener("click", function(e){

        const punto = e.target;
        console.log(punto);
        alert("click");
        burger.style.display = "none";
        navbar.style.display = "flex";
    })

})

