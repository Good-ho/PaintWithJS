const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 600;

let isPaint = false;
let filling = false;
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

function changeColor(event){
    const bgColor = event.target.style.backgroundColor;
    ctx.strokeStyle = bgColor;
}

function handleRangeChange(event){
    ctx.lineWidth = event.target.value;   
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

if(range){
    range.addEventListener("input", handleRangeChange);
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}