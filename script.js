const decrementBtn=document.getElementById("decrement")
const countElement=document.getElementById("count")
const incrementBtn=document.getElementById("increment")
const resetBtn = document.querySelector('#reset');

let count=0;
function updateCount()
{
    countElement.textContent=count;
}

decrementBtn.addEventListener('click',()=>{
    count--;
    updateCount()
})

incrementBtn.addEventListener('click',()=>{
    count++;
updateCount()

// To reset the counter to zero//
resetBtn.addEventListener('click', reset);

})


//updateCount()//

function reset() {
    count = 0;
    updateCount()
    //countValue.innerHTML = count;//
}