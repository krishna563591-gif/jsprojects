// get elements
let inputText=document.querySelector("#input-text");
let button=document.querySelector("#btn");
let tasklist=document.querySelector("#tasklist");


//function/logic
function addTask(){
    // if empty task 
 if (inputText.value === "") {
        alert("Please enter a task");
        return;
    }

    // creating new list item 
   let li= document.createElement("li")

   // adding task inside list item
   li.innerText=inputText.value;

// adding list to the item list:
tasklist.appendChild(li);

// clear input field
inputText.value="";
}


//event listners
button.addEventListener("click",addTask);

