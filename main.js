/* click */
let btn = document.querySelector("#btn");

btn.addEventListener("click", e => {
    let ddlPets = document.getElementById("ddlPets");
    let selectedText = ddlPets.options[ddlPets.selectedIndex].innerHTML;
    alert(`You chose: ${selectedText}`);
})

/* mouseover */
const mouseoverBtn = document.querySelector(".mouseover");

mouseoverBtn.addEventListener("mouseover", e => {
    mouseoverBtn.textContent = "Amazing, thanks";
})

/* focus */
const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", e => {
    focusInput.classList.add("focusBg");
    document.querySelector(".focusLabel").textContent = "Wow, you're killing it."
})  

/* keydown */
const keydownInput = document.querySelector(".keydown");

let keyArray = [];

keydownInput.addEventListener("keydown", e => {
    document.querySelector(".keydownLabel").textContent = "Keep going!"

    //return array list with keys pressed
    if (e.key > 0) {
        keyArray.push(e.key)
        console.log(keyArray);

        document.querySelector(".newHTML").textContent = `${keyArray.join("")}`
    }
})  

/* copy & paste */
const copy = document.querySelector(".copy");
const paste = document.querySelector(".paste");

copy.addEventListener("copy", e => {
    e.preventDefault();
    document.querySelector("span").classList.add("hide");
})

paste.addEventListener("paste", e => {
    document.querySelector("h3").textContent = "You successfully moved me!"
})

/* dragenter */
function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id); 
}

function handleDragEnterLeave(e) {
    if(e.type == "dragenter") {
      this.className = "drag-enter";
    } else {
      this.className = "";
    }
}

function handleOverDrop(e) {
    e.preventDefault(); 
        if (e.type != "drop") {
        return; 
    }

    let draggedId = e.dataTransfer.getData("text");
    let draggedBox = document.getElementById(draggedId);

    if (draggedBox.parentNode == this) {
      this.className = "";
      return; 
    }

    draggedBox.parentNode.removeChild(draggedBox);
    this.appendChild(draggedBox);
    this.className = "";
}

let draggable = document.querySelectorAll('[draggable]')
let target = document.querySelectorAll('[data-drop-target]');
  
for(let i = 0; i < draggable.length; i++) {
    draggable[i].addEventListener("dragstart", handleDragStart);
}

for(let i = 0; i < target.length; i++) {
    target[i].addEventListener("dragover", handleOverDrop);
    target[i].addEventListener("drop", handleOverDrop);
    target[i].addEventListener("dragenter", handleDragEnterLeave);
    target[i].addEventListener("dragleave", handleDragEnterLeave);
}

/* submit */
const logIn = document.querySelector("#logIn");
const submitBtn = document.querySelector("#submit");
const logInInputs = logIn.querySelectorAll("input");

logInInputs.forEach(input => {
    submitBtn.addEventListener("click", e => {
        e.preventDefault();

        if (input.id == "email" && input.value.includes("@")) {
            input.classList.add("colorValid");
            logIn.querySelector(".firstParagraph").textContent = "✅ Valid email address";
        } else if (input.id == "email" && !input.value.includes("@")) {
            input.classList.add("colorInvalid");
            logIn.querySelector(".firstParagraph").textContent = "❗ Please provide a valid email address";

        } else if (input.id == "password" && input.value.length < 5) {
            input.classList.add("colorInvalid");
            logIn.querySelector(".secondParagraph").textContent = "❗ Strength of password: Very weak. Try again";
        } else if (input.id == "password" && input.value.length > 15) {
            input.classList.add("colorValid");
            logIn.querySelector(".secondParagraph").textContent = "✅ Strength of password: Very strong";
        }
    })
})