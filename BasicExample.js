"use strict";

var teclas={};

var Game = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition : 0
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.mainLoop();
};

document.addEventListener( 'DOMContentLoaded', Game.start);
document.addEventListener("keydown" , function(e){
				teclas[e.keyCode] = true;
				//alert(e.keyCode);
			} , false );
document.addEventListener("keyup" , function(e){
				delete teclas[e.keyCode];
			} , false );

Game.clearCanvas = function () {
    Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function() {
	Game.clearCanvas();
    Game.update();
    Game.draw();
    window.setTimeout(Game.mainLoop, 1000 / 60);
};

Game.update = function () {
	//var d = new Date();
   //Game.rectanglePosition = d.getTime() % Game.canvas.width;
   Game.movequadrado();
};


Game.draw = function () {
    Game.canvasContext.fillStyle = "blue";
    Game.canvasContext.fillRect(Game.rectanglePosition, 100, 50, 50);
};

Game.movequadrado = function(){
	if(39 in teclas) {
		Game.rectanglePosition = Game.rectanglePosition+10; 			
	}

}

