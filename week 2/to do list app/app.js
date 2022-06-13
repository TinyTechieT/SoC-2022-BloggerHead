// query selectors for inputs
const myForm = document.querySelector('#my-form');
const taskInput = document.querySelector('#task');

//query selectors for buttons
const addButton = document.querySelector('.addtask');
const deleteButton = document.querySelector('.deletetasks');

// error messages
const msg = document.querySelector('.msg');
const msg2 = document.querySelector('.msg2');

// query selectors for lists
const taskList = document.querySelector('#tasks');
const todoList = document.querySelector('#todo');
const completed = document.querySelector('#completed');

// // event listeners
// myForm.addEventListener('submit', onSubmit);
// myForm.addEventListener('reset', onReset);

// functions

// function onSubmit(e){
//     e.preventDefault();

//     if (taskInput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'task cannot be empty';

//         setTimeout(() => msg.remove(), 3000);
//     }else{
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${taskInput.value}`));

//         taskList.appendChild(li);

//         // clear fields

//         taskInput.value = '';
//     }
// }


// function onReset(e2){
//     e.preventDefault();

//     if (taskList === ''){
//         msg2.classList.add('error');
//         msg2.innerHTML = 'task list is empty';

//         setTimeout(() => msg2.remove(), 3000);
//     } else{
//         taskList = '';
//     }
// }

// alternate way of putting todo list using buttons with alternate event listeners
addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', deleteAll);


// function to add task to all tasks list
function addTask(event){
    event.preventDefault();

    if (taskInput.value === ''){
        alert('add a task');
    }else{
        // to div .todo-item
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');

        // // checkbox input for each task inside li element
        // const checked = document.createElement('input');
        // checked.setAttribute('type', 'checkbox');
        // checked.classList('form-check-input me-1');

        // create li element
        const newTodo = document.createElement('li');
        newTodo.innerText = taskInput.value;
        // newTodo.innerHTML = '<input class="form-check-input me-1" type="checkbox" value="" aria-label="...">', `${taskInput.value}`, '</input>';
        newTodo.classList.add('task-item', 'list-group-item', 'bg-primary');
        todoDiv.appendChild(newTodo);

        // check and delete buttons for each task
        const checked = document.createElement('button'); 
        checked.innerHTML = '<i class="bi bi-check2"></i>';
        checked.classList.add('btn', 'btn-success', 'btn-outline-light', 'd-inline', 'checkk');
        todoDiv.appendChild(checked);

        const trash = document.createElement('button');
        trash.innerHTML = '<i class="bi bi-trash3"></i>';
        trash.classList.add('btn', 'btn-danger', 'btn-outline-light', 'd-inline', 'deletee');
        todoDiv.appendChild(trash);

        // append to ul
        taskList.appendChild(todoDiv);

        // clear fields

        taskInput.value = '';
    }
    
}

// function to delete all tasks
function deleteAll(event2){
    event2.preventDefault();

    if (taskList.value === ''){
        alert('no task to delete');
    }else{
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }

}

// event listener for each task's delete button
taskList.addEventListener('click', removeTask);

// function to remove a task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('deletee')) {
        e.target.parentElement.parentElement.remove();
    }
}

// event listeners to check each task
taskList.addEventListener('click', checkTask);

// function to check a task
function checkTask(e2){
    if(e2.target.parentElement.classList.contains('checkk')) {
        e2.target.parentElement.parentElement.classList.add('checked-item');
    }
}