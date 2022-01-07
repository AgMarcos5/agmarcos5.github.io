class OverworldMap{
    constructor(config){

        // Objetos
        this.gameObjects = config.gameObjects;

        // Puertas
        this.doors = config.doors || {};

        // Paredes
        this.walls = config.walls || {};

        // Capa inferior
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        // Capa superior
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(this.lowerImage,
             utils.withGrid(12) - cameraPerson.x,
             utils.withGrid(6) - cameraPerson.y
        )
    }

    drawUpperImage(ctx, cameraPerson){
        ctx.drawImage(this.upperImage,
            utils.withGrid(12) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        )
    }

    isSpaceTaken(currentX,currentY,direction){
        const {x,y} = utils.nextPosition(currentX,currentY,direction);
        return this.walls[`${x},${y}`] || false;
    }

    checkEvent(){
        const hero = this.gameObjects["hero"];
        const match = this.doors[ `${hero.x},${hero.y}`];
        return match;
    }

}

// Listado de escenarios
window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "../img/maps/StreetLower.png",
        upperSrc: "../img/maps/StreetUpper.png",
        gameObjects: {
            hero: new Person({
                x: utils.withGrid(15),
                y: utils.withGrid(17),
                isPlayerControlled: true,
                src: "../img/characters/hero.png"
            })
        },
        doors: {
            [utils.asGridCoord(24,9)]: "oblivion",
            [utils.asGridCoord(43,7)]: "contacto",
            [utils.asGridCoord(44,16)]: "galeria",
            [utils.asGridCoord(15,17)]: "inicio",
        },
        walls: {
            [utils.asGridCoord(35,6)]: true,
            [utils.asGridCoord(36,6)]: true,
            [utils.asGridCoord(37,6)]: true,
            [utils.asGridCoord(38,6)]: true,
            [utils.asGridCoord(39,6)]: true,
            [utils.asGridCoord(40,6)]: true,
            [utils.asGridCoord(41,6)]: true,
            [utils.asGridCoord(43,6)]: true,

            [utils.asGridCoord(34,7)]: true,
            [utils.asGridCoord(42,7)]: true,
            [utils.asGridCoord(44,7)]: true,

            [utils.asGridCoord(24,8)]: true,
            [utils.asGridCoord(32,8)]: true,
            [utils.asGridCoord(33,8)]: true,
            [utils.asGridCoord(34,8)]: true,
            [utils.asGridCoord(45,8)]: true,

            [utils.asGridCoord(18,9)]: true,
            [utils.asGridCoord(19,9)]: true,
            [utils.asGridCoord(20,9)]: true,
            [utils.asGridCoord(21,9)]: true,
            [utils.asGridCoord(22,9)]: true,
            [utils.asGridCoord(23,9)]: true,
            [utils.asGridCoord(25,9)]: true,
            [utils.asGridCoord(26,9)]: true,
            [utils.asGridCoord(28,9)]: true,
            [utils.asGridCoord(29,9)]: true,
            [utils.asGridCoord(30,9)]: true,
            [utils.asGridCoord(31,9)]: true,
            [utils.asGridCoord(35,9)]: true,
            [utils.asGridCoord(36,9)]: true,
            [utils.asGridCoord(37,9)]: true,
            [utils.asGridCoord(46,9)]: true,

            [utils.asGridCoord(17,10)]: true,
            [utils.asGridCoord(27,10)]: true,
            [utils.asGridCoord(46,10)]: true,

            [utils.asGridCoord(17,11)]: true,
            [utils.asGridCoord(46,11)]: true,

            [utils.asGridCoord(17,12)]: true,
            [utils.asGridCoord(42,12)]: true,
            [utils.asGridCoord(43,12)]: true,
            [utils.asGridCoord(44,12)]: true,
            [utils.asGridCoord(45,12)]: true,

            [utils.asGridCoord(17,13)]: true,
            [utils.asGridCoord(24,13)]: true,
            [utils.asGridCoord(25,13)]: true,
            [utils.asGridCoord(26,13)]: true,
            [utils.asGridCoord(27,13)]: true,
            [utils.asGridCoord(28,13)]: true,
            [utils.asGridCoord(29,13)]: true,
            [utils.asGridCoord(30,13)]: true,
            [utils.asGridCoord(31,13)]: true,
            [utils.asGridCoord(32,13)]: true,
            [utils.asGridCoord(33,13)]: true,
            [utils.asGridCoord(34,13)]: true,
            [utils.asGridCoord(41,13)]: true,

            [utils.asGridCoord(12,14)]: true,
            [utils.asGridCoord(13,14)]: true,
            [utils.asGridCoord(14,14)]: true,
            [utils.asGridCoord(15,14)]: true,
            [utils.asGridCoord(16,14)]: true,
            [utils.asGridCoord(17,14)]: true,
            [utils.asGridCoord(18,14)]: true,
            [utils.asGridCoord(23,14)]: true,
            [utils.asGridCoord(34,14)]: true,
            [utils.asGridCoord(42,14)]: true,

            [utils.asGridCoord(11,15)]: true,
            [utils.asGridCoord(24,15)]: true,
            [utils.asGridCoord(34,15)]: true,
            [utils.asGridCoord(42,15)]: true,
            [utils.asGridCoord(44,15)]: true,

            [utils.asGridCoord(12,16)]: true,
            [utils.asGridCoord(13,16)]: true,
            [utils.asGridCoord(14,16)]: true,
            [utils.asGridCoord(15,16)]: true,
            [utils.asGridCoord(16,16)]: true,
            [utils.asGridCoord(17,16)]: true,
            [utils.asGridCoord(18,16)]: true,
            [utils.asGridCoord(24,16)]: true,
            [utils.asGridCoord(34,16)]: true,
            [utils.asGridCoord(41,16)]: true,
            [utils.asGridCoord(42,16)]: true,
            [utils.asGridCoord(43,16)]: true,
            [utils.asGridCoord(45,16)]: true,

            [utils.asGridCoord(11,17)]: true,
            [utils.asGridCoord(24,17)]: true,
            [utils.asGridCoord(34,17)]: true,
            [utils.asGridCoord(46,17)]: true,

            [utils.asGridCoord(11,18)]: true,
            [utils.asGridCoord(24,18)]: true,
            [utils.asGridCoord(34,18)]: true,
            [utils.asGridCoord(46,18)]: true,

            [utils.asGridCoord(11,19)]: true,
            [utils.asGridCoord(18,19)]: true,
            [utils.asGridCoord(19,19)]: true,
            [utils.asGridCoord(20,19)]: true,
            [utils.asGridCoord(21,19)]: true,
            [utils.asGridCoord(22,19)]: true,
            [utils.asGridCoord(23,19)]: true,
            [utils.asGridCoord(34,19)]: true,
            [utils.asGridCoord(46,19)]: true,

            [utils.asGridCoord(12,20)]: true,
            [utils.asGridCoord(13,20)]: true,
            [utils.asGridCoord(14,20)]: true,
            [utils.asGridCoord(15,20)]: true,
            [utils.asGridCoord(16,20)]: true,
            [utils.asGridCoord(17,20)]: true,
            [utils.asGridCoord(35,20)]: true,
            [utils.asGridCoord(36,20)]: true,
            [utils.asGridCoord(37,20)]: true,
            [utils.asGridCoord(38,20)]: true,
            [utils.asGridCoord(39,20)]: true,
            [utils.asGridCoord(40,20)]: true,
            [utils.asGridCoord(41,20)]: true,
            [utils.asGridCoord(42,20)]: true,
            [utils.asGridCoord(43,20)]: true,
            [utils.asGridCoord(44,20)]: true,
            [utils.asGridCoord(45,20)]: true,

        }
    }
}