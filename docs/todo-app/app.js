// Gets user input from textbox
function getUserInput() {
    const userInput = document.getElementById('userInput');
    const userInputValue = userInput.value;
    
    return userInputValue;
}

function addTask(userInputValue) { 
    document.getElementById('todos-list').innerHTML += `<li class="todo">\n\t<input type="checkbox" onclick=crossTask(event)>\n\t${userInputValue}\n\t<button onclick="deleteTask(event)">&#10006;</button>\n</li>`;
}

// Crosses out task whenever checkbox is clicked.
function crossTask(event) {

    const checkbox = event.target;
    const task = event.target.parentElement;

    if (event.target.checked) {
        task.style.color = '#d1d5db';
        task.style.textDecoration = 'line-through';   
    } else {
        task.style.color = 'black';
        task.style.textDecoration = 'none';   
    }

}

// Deletes user inputted task whenever X is clicked.
function deleteTask(event) {
    const deleteBtn = event.target;
    const task = event.target.parentElement;

    task.remove();
}







