// get elements
let inputText=document.querySelector("#input-text");
let button=document.querySelector("#btn");
let timer=document.querySelector("#timer");



// function/logic

function startTimer(){
    let time= Number(inputText.value);
    
if(time<=0){
    alert("Enter Number Above 0")
 return;
};
timer.innerText = time;

// setInterval = loop that runs every second
    intervalId = setInterval(function () {

        time --;

        timer.innerText = time;

        // CONDITION: stop timer at 0
        if (time === 0) {
            clearInterval(intervalId);
        }

    }, 1000);
};
// event listners
button.addEventListener("click",startTimer);

