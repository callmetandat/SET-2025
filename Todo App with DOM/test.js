function saveTask(id, taskName, status="to-do") {
    const newTask = {
        id: {"taskName": taskName, "status": status}
    }
    localStorage.setItem(newTask, JSON.stringify([1,2]));
    const listItems = { ...localStorage};
    console.log(listItems)
}

saveTask(1, "todoApp");