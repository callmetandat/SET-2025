function createContainer(type, className, id="") {
    const container = document.createElement(type);
    container.className = className;
    container.id = id;
    return container;
}

var flag = true;

function validateForm() {
    let x = document.forms["task-form"]["fname"].value;
    if (x == "") {
        flag = false;
        alert("Name must be filled out");
        return false;
    }
}

let count = 0;

window.onload = function() {
    const addTaskButton = document.getElementById("add-task-button");
    const taskList = document.getElementById("task-list");
    
    addTaskButton.addEventListener("click", () => {
        if (flag === true) {
            console.log(flag);
            // Create div container
            let container = createContainer("div", "item", `item${count}`);
    
            // Get task name
            const taskName = document.getElementById("task-input").value;
    
            const task = document.createElement("span");
            task.textContent = taskName;
            
            // Create edit task button
            const editButton = document.createElement("button");
            editButton.id = `edit-button-${count}`;
            editButton.textContent = "EDIT";
            editButton.className = "todo__button todo__button--edit"
            
            // Create delete task button
            const deleteButton = document.createElement("button")
            deleteButton.id = `delete-button-${count}`;
            deleteButton.textContent = "DELETE";
            editButton.className = "todo__button todo__button--delete"
            
            deleteButton.addEventListener("click", () => {
                const task = document.getElementById(`item${deleteButton.id.split('-')[2]}`)
                task.remove();
            })
    
            // Append to div container
            container.appendChild(task);
            container.appendChild(editButton);
            container.appendChild(deleteButton)
    
            // Append container to list
            taskList.appendChild(container);
            count++;
        }
    });
}