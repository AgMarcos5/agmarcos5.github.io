
//EFECTOS SCROLL
let inicioButton = document.querySelector(".to-top");
let rootElement = document.documentElement;

inicioButton.addEventListener("click", () =>{
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



let lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   navfix();   // navbar position fixed
   let st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
       // SCROLL ABAJO
        parallaxOblivion("arriba");
        parallaxGaleria("arriba");
   } else {
        // SCROLL ARRIBA
        parallaxOblivion("abajo");
        parallaxGaleria("abajo");
   }
   lastScrollTop = st <= 0 ? 0 : st; 
}, false);



function navfix() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.querySelector("#game-navbar ul").classList.add("navfix");
    }
    else{
        document.querySelector("#game-navbar ul").classList.remove("navfix");
    }
}

function parallaxOblivion(direction){
    if(document.querySelector("#oblivion-container").classList.contains("mostrar")){
        let headerFront = document.querySelector(".oblivion-header-front");
        let topVal = parseInt(headerFront.style.top, 10);

        if(direction === "arriba"){
            if(topVal > -115)   // limite superior
            headerFront.style.top = (topVal - 1) + "px";    
        }
        else if(direction === "abajo"){
            if(topVal < -100)   // limite inferior
            headerFront.style.top = (topVal + 1) + "px";    
        }
    }
}

function parallaxGaleria(direction){
    if(document.querySelector("#galeria-container").classList.contains("mostrar")){
        let headerFront = document.querySelector(".video-wrapper video");
        let headerPos = window.getComputedStyle(headerFront, null).getPropertyValue("object-position");
        let posVal = parseInt(headerPos.split(" ")[1]);
        console.log(posVal)
        if(direction === "arriba"){
            console.log(direction)
            if(posVal > -820)
            headerFront.style.objectPosition = `0 ${posVal - 50}px`;
        }
        else if(direction === "abajo"){
            console.log(direction)
            if(posVal < -640)
                headerFront.style.objectPosition = `0 ${posVal + 50}px`;
        }
    }
}


