const toggles=document.querySelectorAll('.toggle')
const good=document.querySelector('#good')
const average=document.querySelector('#average')
const excellent=document.querySelector('#excellent')

toggles.forEach(toggle=>addEventListener.addEventListener('change',(e)=>doTheTick(e.target)))

function doTheTick(theClickedOne){
    if(good.checked&& average.checked &&excellent.checked){
        if(good===theClickedOne){
            excellent.checked=false

        }
        if(average===theClickedOne){
            good.checked=false
        }
        if(excellent===theClickedOne){
            average.checked=false
        }
    }
}