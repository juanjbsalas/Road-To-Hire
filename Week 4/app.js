// console.log(document.querySelector('#todos'));
// console.log(document.querySelector('.todo'));


// console.log("The script is running!");

// let todo1 = document.querySelector('#todos .todo');

// todo1.style.color = 'lightgrey';
// todo1.style.textDecoration = 'line-through';

// Stepby-Step
// 1: Get text input from textbox, function that gets input from textbox and returns input
// 2: Send the previous return value to the function that once the addtask button is clicked,
//    it is added on the li list.

function getUserInput() {
    console.log("Function 1 is running!!");
    const userInput = document.getElementById('userInput');
    const userInputValue = userInput.value;
    
    return userInputValue;
}

function addTask(x) { 
    // x should be the userInputValue such as "Wash Laundry"
    console.log("Now Figure 2 is running!");
    document.getElementById('todos-list').innerHTML += `<li class="todo"><button>X</button>${x}</li>`;
}

let count = 0;

function crossTask() {
    const todo = document.querySelector('#todos-list li');
    count += 1
    
    if (count % 2 !== 0) {
        todo.style.color = 'lightgrey';
        todo.style.textDecoration = 'line-through';   
    } else {
        todo.style.color = 'black';
        todo.style.textDecoration = 'none';  
    }

}







