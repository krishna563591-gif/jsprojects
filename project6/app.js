// get elements
let inputText1=document.querySelector(".input1");
let inputText2=document.querySelector(".input2");
let button1=document.querySelector("#btn1");
let button2=document.querySelector("#btn2");
let paragraph=document.querySelector("p");



function add(){
let num1=parseFloat(inputText1.value);
let num2=parseFloat(inputText2.value);
let sum= num1+num2;
paragraph.innerText="Result"+":" +  sum;
}


function subAdd(){
 let num1=parseFloat(inputText1.value);
let num2=parseFloat(inputText2.value);
let difference=num1-num2;

paragraph.innerText="Result"+":" +  difference;
}

// event listeners:
button1.addEventListener("click",add);
button2.addEventListener("click",subAdd);

