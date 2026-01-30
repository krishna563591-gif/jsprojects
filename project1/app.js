//Dom Elements
let button=document.querySelector("#btn")
let paragraph=document.querySelector("#ptg")
let counter=0;

function firstFunction(){
   counter++;
   paragraph.innerHTML=counter;
}

button.addEventListener("click",firstFunction);