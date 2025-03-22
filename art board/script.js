const canvas=document.getElementById('canvas');
const increaseBtn=document.getElementById('increase')
const decreaseBtn=document.getElementById('decrease')
const sizeEL=document.getElementById('size');
const colorE1=document.getElementById('color')
const clearE1=document.getElementById('clear')
const ctx=canvas.getContext('2d')
let size=10;
let isPressed=false
colorE1.value='black'
let color =colorE1.value
let x
let y
canvas.addEventListener('mousedown',(e)=>{
    isPressed=true
    x=e.offsetX
    y=e.offsetY

})
canvas.addEventListener('mouseup',(e)=>{
    isPressed=false
    x=undefined
    y=undefined
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;
        drawCircle(x2,y2)
        drawLine(x,y,y2)
        x=x2;
        y=y2;
    }
})
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI);
    ctx.fillStyle=color;
    ctx.fill()
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle=color
    ctx.lineWidth=size*2
    ctx.stroke()
}
function updateSizeOnScreen(){
    sizeEL.innerText=size
}
increaseBtn.addEventListener('click',()=>{
    size+=5
    if(size>50){
        size=50
    }
    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click',()=>{
    size-=5
    if(size<5){
        size=5
    }
    updateSizeOnScreen()
})
colorE1.addEventListener('change',(e)=>e.target.value)
clearE1.addEventListener('click',()=>ctx.clearReact(0,0,canvas.width,canvas.height))