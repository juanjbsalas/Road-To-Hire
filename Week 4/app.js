function getUserInput() {
    console.log("Function 1 is running!!");
    const userInput = document.getElementById('userInput');
    const userInputValue = userInput.value;
    
    return userInputValue;
}

function addTask(userInputValue) { 
    // x should be the userInputValue such as "Wash Laundry"
    console.log("Now Figure 2 is running!");
    document.getElementById('todos-list').innerHTML += `<li class="todo">\n\t<input type="checkbox" onclick=crossTask(event)>\n\t${userInputValue}\n\t<button onclick="deleteTask(event)">X</button>\n</li>`;
}


function crossTask(event) {

    const checkbox = event.target;
    const task = event.target.parentElement;

    // console.dir(checkbox);

    if (event.target.checked) {
        task.style.color = 'lightgrey';
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







