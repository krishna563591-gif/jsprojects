let button = document.querySelector("#btn");
let body = document.querySelector("#body");

let currentMode = "white";

function lightMode() {
  if (currentMode === "white") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    currentMode = "black";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    currentMode = "white";
  }
}

button.addEventListener("click", lightMode);








// or 
/*// -------- STEP 1: GET ELEMENTS --------

let page = document.getElementById("page");
let button = document.querySelector("button");


// -------- STEP 2: STATE --------

// Variable to store current mode
let isDarkMode = false;


// -------- STEP 3: FUNCTION --------

function toggleMode() {

    // CONDITION: check current mode
    if (isDarkMode === false) {

        // Apply dark mode styles
        page.style.backgroundColor = "black";
        page.style.color = "white";
        button.innerText = "Light Mode";

        // Update state
        isDarkMode = true;

    } else {

        // Apply light mode styles
        page.style.backgroundColor = "white";
        page.style.color = "black";
        button.innerText = "Dark Mode";

        // Update state
        isDarkMode = false;
    }
}
*/