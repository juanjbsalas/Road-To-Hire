
function changeStyle(id, styles) {
    const el1 = document.querySelector(id);
    const desiredStyle = styles;

    for (let prop in styles) {
        el1.style[prop] = desiredStyle[prop];
    }

}

// Test on browser console
const elementId = "myElement";
const newStyles = { color: "red", fontSize: "100px" };
// changeStyle(elementId, newStyles);

function addNewElement(elementTag, parentId) {
    parent = document.getElementById(parentId);
    const newElement = document.createElement(elementTag);
    newElement.textContent = "I am a brand new element, especifically a " + elementTag + " element!";
    parent.appendChild(newElement);

}


const parentElementId = "first-heading";
