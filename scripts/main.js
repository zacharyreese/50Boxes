/*eslint-env browser*/

var boxCounter = 1;
var zIndexCounter = 1;

function makeSquare() {
        var top = Math.floor(Math.random()*450);
        var left = Math.floor(Math.random()*450);
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        var boxcontainer = document.getElementById('box');
    
        var drawbox = document.createElement('div');
        drawbox.id = "drawbox" + boxCounter;
        drawbox.className = "box";
        
        drawbox.style.marginTop = top+"px";
        drawbox.style.marginLeft= left+"px";
        drawbox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    
        drawbox.onclick = function changeColor() {
            var red = Math.floor(Math.random()*255);
            var green = Math.floor(Math.random()*255);
            var blue = Math.floor(Math.random()*255);
            drawbox.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            drawbox.style.zIndex = zIndexCounter;
            zIndexCounter++;
        
        }
    
        boxcontainer.appendChild(drawbox);
    
        boxCounter++;
        
        /*var boxstyle = "margin-top:" + top+"px; margin-left:"+left+"px; background-color:rgb("+red+", "+green+", "+blue+");"
        boxcontainer.innerHTML += "<div class='box' style=\""+boxstyle+"\"></div>";*/
    
}

function addSquare() {
    makeSquare();
}

function start() {
    for(var x = 0; x < 50; x++) {
     makeSquare();   
    }
}

window.onload = start;