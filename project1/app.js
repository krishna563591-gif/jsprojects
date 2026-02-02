//Dom Elements
let button1=document.querySelector("#btn1")
let button2=document.querySelector("#btn2")
let button3=document.querySelector("#btn3")
let paragraph=document.querySelector("#ptg")
let divBg=document.querySelector(".container")
  let counter=0;


  //increase function
 function increaseButton(){
  counter=counter+1;
   if(counter==10){
divBg.style.backgroundColor="green";
  }


  paragraph.innerText="clicked:"+counter+"times";

 

};
// decrease function
function decreaseCount(){

  counter=counter-1;
  paragraph.innerText="clicked:"+counter+"times";
}
  
// reset function
function resetFunct(){
  counter=0;
  paragraph.innerText=counter;
};


// Event Listener
button1.addEventListener("click",increaseButton);
button2.addEventListener("click",decreaseCount);
button3.addEventListener("click",resetFunct);



