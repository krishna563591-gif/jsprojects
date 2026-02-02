//get elements
let text=document.querySelector("#text");
let button=document.querySelector("#btn");
let button2=document.querySelector("#btn2");

// function 

function showHide(){
    if(text.style.display !=="none"){
      text.style.display ="none";
      button.innerText="Show";
      return;

    }
  else {

        // Show the text
        text.style.display = "block";

        // Update button text
        button.innerText = "Hide";
    }
};

// 
function disableF(){
    //diasble button
    button2.disabled=true;
    button2.innerText="Disabled"
}



//event listener
button.addEventListener("click",showHide);
button.addEventListener("click",disableF);