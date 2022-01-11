(function () {
 

    // Inicia juego
    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    })

    overworld.init();

    // Inicia navbar
    const initNavbar = () => {

        let navbar = document.querySelectorAll("#game-navbar ul > li a");

        navbar.forEach( element => {
            let id = element.id;
            element.addEventListener("click", function() {
                // cambiar posicion personaje
                overworld.setPosition(id);
            });
        });

    }
    
    initNavbar();


    // Muestra contenido de las secciones
    const initSecciones = () => {

        document.addEventListener("EntraPuerta", e =>{
            let {puerta} = e.detail;         
            if(puerta !== "inicio"){
                let container = document.querySelector(`#${puerta}-container`);
                container.classList.add("mostrar");
                document.querySelector("#game").scrollIntoView();

                let buttonScroll = document.querySelector(".scroll-secciones");
                buttonScroll.classList.add("showButton");
                buttonScroll.addEventListener("click", function() {
                    buttonScroll.classList.remove("showButton");
                });
            }
          
        });

        document.addEventListener("SalePuerta", e =>{
            let {puerta} = e.detail;
            if(puerta !== "inicio"){
                document.querySelector(`#${puerta}-container`).classList.remove("mostrar");
                document.querySelector(".scroll-secciones").classList.remove("showButton");
            }

        });

    }

    initSecciones();


    AOS.init();


})();