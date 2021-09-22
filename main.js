/* click */
const clickBtn = document.querySelector(".click");

clickBtn.addEventListener("click", e => {
    e.preventDefault();
    clickBtn.classList.add("btnStyle");
    clickBtn.innerText = "Cool, you did it!";
})

/* mouseover */
const mouseoverBtn = document.querySelector(".mouseover");

mouseoverBtn.addEventListener("mouseover", e => {
    mouseoverBtn.innerText = "Amazing, thanks";
})

/* focus */
const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", e => {
    focusInput.classList.add("focusBg");
    document.querySelector(".focusLabel").innerText = "Wow, you're killing it."
})  

/* keydown */
const keydownInput = document.querySelector(".keydown");

keydownInput.addEventListener("keydown", e => {
    document.querySelector(".keydownLabel").innerText = "Keep going!"
})  

/* copy & paste */
const copy = document.querySelector(".copy");
const paste = document.querySelector(".paste");

copy.addEventListener("copy", e => {
    e.preventDefault();
    document.querySelector("span").classList.add("hide");
})

paste.addEventListener("paste", e => {
    document.querySelector("h3").innerText = "You successfully moved me!"
})

/* drag & drop */
function handleDragStart(e) {
    e.dataTransfer.setData("text", this.id); 
}

function handleDragEnterLeave(e) {
    if(e.type == "dragenter") {
      this.className = "drag-enter" 
    } else {
      this.className = "" 
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