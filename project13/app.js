// -------- STEP 1: GET ELEMENTS --------

let itemInput = document.getElementById("input-text");
let itemList = document.getElementById("itemlist");


// -------- STEP 2: STATE (ARRAY) --------

// Array to store all items
let items = [];


// -------- STEP 3: FUNCTION --------

function addItem() {

    // Read value from input
    let value = itemInput.value;

    // CONDITION: prevent empty input
    if (value === "") {
        return;
    }

    // Add value to array
    items.push(value);

    // Clear list before re-render
    itemList.innerHTML = "";

    // LOOP through array
    for (let i = 0; i < items.length; i++) {

        // Create list item
        let li = document.createElement("li");

        // Set text from array
        li.innerText = items[i];

        // Add to UI
        itemList.appendChild(li);
    }

    // Clear input
    itemInput.value = "";
}
//event listner
let button = document.getElementById("btn");
button.addEventListener("click", addItem);

