class Overworld {

    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        
        // Escenario
        this.map = null;

        //Puerta actual (oblivion-contacto-galeria-inicio)
        this.currentDoor = null;
    }


    startGameLoop(){
        const step = () => {

            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);


            // Camara sobre el jugador
            const cameraPerson = this.map.gameObjects.hero;

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })

            // draw lower layer
            this.map.drawLowerImage(this.ctx, cameraPerson);
            
            // Dibujar GameObjects
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })

            // draw upper layer
            this.map.drawUpperImage(this.ctx, cameraPerson);

            requestAnimationFrame( () =>{
                step();
            })
        }
        step();
    }

    bindHeroPositionCheck() {
        document.addEventListener("PersonWalkingComplete", e => {
            // Salió de una puerta
            if(this.currentDoor){
                utils.emitEvent("SalePuerta", {puerta : this.currentDoor});
                this.currentDoor = null;
            }

            // Se encuentra en una puerta
            if(this.map.checkEvent()){
                this.currentDoor = this.map.checkEvent();
                utils.emitEvent("EntraPuerta", {puerta : this.currentDoor});
            }
        })
    }

    setPosition(name){
        let hero = this.map.gameObjects["hero"];
        if(this.currentDoor !== name){
            switch(name){
                case 'oblivion' : hero.changePosition(24,9);
                break;
                case 'contacto' : hero.changePosition(43,7);
                break;
                case 'galeria'  : hero.changePosition(44,16);
                break;
                default : hero.changePosition(15,17);
            }
        }
    }


    init(){

        // Inicia escenario
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        
        // Input teclado
        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.bindHeroPositionCheck(); 

        this.startGameLoop();
    }
}