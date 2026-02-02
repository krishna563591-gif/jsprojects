//get dom elements:
const button=document.querySelector("button")
const body=document.querySelector(".body")

//Array Of colors:
let colors=["red","green","yellow","pink"]

//Bg Changer Function
function bgChanger(){
   //math.random gives random number between 0 to 1.
   let randomNumber=Math.random();
   //multiply by array length to stay inside array range
   let randomIndex= Math.floor(randomNumber*colors.length);// in the backend -0*0=0[red],1*3=3[pink]

   //pick a random color from array.
   let randomColor= colors[randomIndex];

// change bg color
body.style.backgroundColor=randomColor;



}

