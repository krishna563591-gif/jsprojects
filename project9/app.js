// get elements
let paraGraph=document.querySelector("#para");
let button=document.querySelector("#btn");

// function/logic

function changeButton(){
    paraGraph.style.color="red";
};
// event listners
button.addEventListener("click",changeButton);