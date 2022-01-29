var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");



function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(button);
    button.innerHTML = "Delete";
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(event) {    
    if (inputLength() > 0) {
        createListElement();
    } 
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    } 
}

function markItemDone(element) {
    if (element.target.tagName === "LI") {
        element.target.classList.toggle("done");
    } else {
        if (element.target.tagName === "BUTTON") {
            deleteElement(element);
        }
    }
}

function deleteElement(element) {
    console.log(element);
    element.target.parentNode.remove();
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markItemDone);

