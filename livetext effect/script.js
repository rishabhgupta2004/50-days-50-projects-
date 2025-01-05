const text1=document.getElementById('text')
const speed1=document.getElementById('speed')
const text=(' welcome ,I am RISHABH GUPTA')
let idx=1
let speed=300/speed1.value
writeText()
function writeText(){
    text1.innerText=text.slice(0,idx)
    idx++
    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText,speed)
}
speed1.addEventListener('input',(e)=>speed=300/e.target.value )