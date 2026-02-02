// get elements
let inputText= document.querySelector("#text");
let button= document.querySelector("#button");
let paragraph= document.querySelector("#p");

// function / logic

function validator(){
// if its empty
let username= inputText.value;
if(username===""){
paragraph.innerText="Please enter a username first";
paragraph.style.color="red";
return;

}

// condition- length
if (username.length < 4 ){
    paragraph.innerText= "Username must be above 5 characters";
    paragraph.style.color="orange";
    return;
}


// if all conditons are met

paragraph.innerText= "Username is Valid!";
paragraph.style.color="green";

}

// event listners.
button.addEventListener("click",validator);
