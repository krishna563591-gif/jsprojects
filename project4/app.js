//get dom elements
let inputText=document.querySelector('.input-text');
let button=document.querySelector('#btn');

//function/logic
function showButton(){
    if(inputText.type==="password"){
// change password to text so that it is visible.
inputText.type="text";
// change button to show.
button.innerText="Hide";

    }
    else{
        //change input type back to password.
        inputText.type="password"
        button.innerText="Show"
    }
   

};

//event listners
button.addEventListener("click",showButton);