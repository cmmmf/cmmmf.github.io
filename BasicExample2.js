function changeBackgroundColor () {
    document.body.style.background = "blue";
}



var Game = {
    canvas : undefined,
    canvasContext : undefined,
    rectanglePosition: 0
};

Game.start = function () {
    Game.canvas = document.getElementById("myCanvas");
    Game.canvasContext = Game.canvas.getContext("2d");
    Game.mainLoop();
};

function start () {
   var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height)
    changeCanvasColor();
    mainLoop();
}

document.addEventListener('DOMContentLoaded', Game.start);

function update () {
}

function draw () {
}

function mainLoop () {
    //canvasContext.fillStyle = "blue";
   // canvasContext.fillRect(0, 0, canvas.width, canvas.height);
   // update();
  //  draw();
  //  window.setTimeout(mainLoop, 1000 / 60);
}
 