const addTask = document.querySelector('#addtasks');
const taskInput = document.querySelector('#add-task');
const msg = document.querySelector('.msg');
const taskList = document.querySelector('#tasks');

addTask.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if (taskInput === ''){
        msg.classList.add("error");
        msg.innerHTML = "fields are empty!!!!";

        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${taskInput.value}`));

        taskList.appendChild(li);

        // clear fields

        taskInput.value = '';
    }
}

