/* This function takes two parameters, an HTML ID and a specific css style, 
changes the style of that certain id in that corresponding document, this function
does not return anything. A potential use case would be to let the user change the 
background color of the page. */

function changeStyle(id, styles) {
    const el1 = document.querySelector(id);
    const desiredStyle = styles;

    for (let prop in styles) {
        el1.style[prop] = desiredStyle[prop];
    }

}


// An example of this function would be: *Test on browser console*
// const elementId = "myElement";
// const newStyles = { color: "red", fontSize: "100px" };
// changeStyle(elementId, newStyles);



/* This function takes two strings that represent an element tag and a parent id, it then
adds that new element to the HTML webpage within a certain parent. A potential usecase
of this is to add a new question depending on whether a user's answer is yes or no to a 
previous question.*/
function addNewElement(elementTag, parentId) {
    parent = document.getElementById(parentId);
    const newElement = document.createElement(elementTag);
    newElement.textContent = "I am a brand new element, especifically a " + elementTag + " element!";
    parent.appendChild(newElement);

}

// An example of this function would be: **Test on browser console*
const parentElementId = "first-heading";
addNewElement("p", parentElementId);