/*
let boton = document.querySelector(".show-more button");

boton.addEventListener("click", function() {
    let articulo = document.querySelector(".oblivion-content article");
    console.log(articulo)
    if(articulo.classList.contains("abrir")){
        boton.innerHTML="mostrar más";
        articulo.classList.remove("abrir");
    } else{
        boton.innerHTML="mostrar menos";
        articulo.classList.add("abrir");
     }
});
*/


//EFECTOS SCROLL

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   navfix();   // navbar position fixed
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
       // SCROLL ABAJO
        parallaxOblivion("arriba");
   } else {
        // SCROLL ARRIBA
        parallaxOblivion("abajo");
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
        var topVal = parseInt(headerFront.style.top, 10);

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


