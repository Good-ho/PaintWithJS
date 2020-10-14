const canvas = document.getElementById("jsCanvas");

canvas.width = 700;
canvas.height = 600;

let isPaint = false;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;

function startPainting(){
    isPaint = true;
}

function stopPainting(event){
    isPaint = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;    
    if(!isPaint){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}