// Dom Elements
let button = document.querySelector("#btn"); // Added semicolon
let paraGraph = document.querySelector("#p"); // Added 'let' and semicolon

// Function
function changeTextFunction() {
  paraGraph.innerText = "This is changed paragraph!";
}

// Event Listener
button.addEventListener("click", changeTextFunction); // Changed comma to a comma and added quotes around "click"
