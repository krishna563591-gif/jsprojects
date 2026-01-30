// Dom Elements
let button = document.querySelector("#btn"); // Added semicolon
let paraGraph = document.querySelector("#p"); // Added 'let' and semicolon

// Function
function changeFunction() {
  paraGraph.textContent = "This is changed paragraph!";
}

// Event Listener
button.addEventListener("click", changeFunction); // Changed comma to a comma and added quotes around "click"
