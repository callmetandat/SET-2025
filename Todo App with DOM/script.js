function createContainer(id="") {
    const container = document.createElement("div");
    container.className = "task-item";
    container.id = id;
    return container;
}

function createEditButton() {
    const editButton = document.createElement("button");
    editButton.textContent = "EDIT";
    editButton.className = "todo__button todo__button--edit";
    return editButton;
}

function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.className = "todo__button todo__button--delete";
    return deleteButton;
}

function createStateSelect(currentStatus="To-do") {
    const select = document.createElement("select");
    select.className = "todo__select";
    const options = ["To-do", "Pending", "In-progress", "Completed"];
    options.forEach(option => { 
        const status = document.createElement("option");
        status.value = option;
        status.textContent = option.charAt(0).toUpperCase() + option.slice(1);
        
        if (option === currentStatus) {
            status.selected = true;
        }
        select.appendChild(status);
    });
    return select;
}

function createAllCompletedTasksDeleteButton() {
    const deleteButton = createDeleteButton();
    deleteButton.textContent = "DELETE COMPLETED TASKS";
    return deleteButton
}

function handleDeleteAllCompletedTasksButton(deleteButton) {
    deleteButton.addEventListener("click", () => {
        const listTasks = document.querySelectorAll("div.task-item--completed");
        console.log(listTasks);
        listTasks.forEach(task => task.remove());
    });
}

function handleDeleteButton(deleteButton) {
    deleteButton.addEventListener("click", () => {
        const task = deleteButton.parentElement;
        task.remove();
    });
}

function handleEditButton(editButton) {
    editButton.addEventListener("click", () => {
        const task = editButton.parentElement;
        if (editButton.textContent === "EDIT") {
            const taskSpan = task.querySelector("span");
    
            const inputTask = document.createElement("input");
            inputTask.type = "text";
            inputTask.className = "todo__edit-input";
            task.replaceChild(inputTask, taskSpan);
            editButton.textContent = "DONE";
            inputTask.focus();
        } else {
            const inputTask = task.querySelector("input");
            const newTaskName = inputTask.value.trim();
            if (newTaskName === "") {
                alert("Task cannot be empty");
                return;
            }
            const newTask = document.createElement("span");
            newTask.textContent = newTaskName;
            task.replaceChild(newTask, inputTask);
            editButton.textContent = "EDIT";
        }
    });
}

function handleStatusSelect(statusSelect) {
        statusSelect.addEventListener("change", () => {
        const task = statusSelect.parentElement;
        let option = statusSelect.options[statusSelect.selectedIndex].text;
        option = option.charAt(0).toLowerCase() + option.slice(1);
        task.classList.remove("task-item--pending", "task-item--completed", "task-item--in-progress");
        task.className += ` task-item--${option}`;
    })
}

function renderTask(taskList, taskName, status="to-do") {
    const taskContainer = createContainer(`${Date.now()}`);
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskName;

    const editButton = createEditButton();
    handleEditButton(editButton);

    const deleteButton = createDeleteButton();
    handleDeleteButton(deleteButton);

    const statusSelect = createStateSelect(status);
    handleStatusSelect(statusSelect);

    taskContainer.classList.add(`task-item--${status.charAt(0).toLowerCase() + status.slice(1)}`);
    taskContainer.appendChild(statusSelect);
    taskContainer.appendChild(taskSpan);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);
    taskList.appendChild(taskContainer);
}

function savedTask(id, taskName, status="to-do") {
    taskObject[id] = id;
    taskObject[taskName] = taskName;
    taskObject[status] = status;
}

let taskObject = {};

window.onload = function() {
    const addTaskButton = document.getElementById("add-task-button");
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    // Load tasks from localStorage
    // Render tasks

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const input = document.getElementById("task-input");
        const taskName = input.value.trim();

        if (taskName === "") {
            alert("Please enter a task!");
            return;
        }
        
        renderTask(taskList, taskName, "In-progress");
        
        // Save task into localStorage
        //taskOject[taskName] = 
        
        // Append container to list
        input.value = ""; // Reset input
    });
    const deleteCompletedTasksButton = createAllCompletedTasksDeleteButton();
    taskList.appendChild(deleteCompletedTasksButton);
    handleDeleteAllCompletedTasksButton(deleteCompletedTasksButton);
};