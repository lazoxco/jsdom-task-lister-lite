document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // get the user input
    const newTask = document.querySelector("#new-task-description").value
    
    // add it to the DOM
    const taskItem = document.createElement("li")
    taskItem.innerText = newTask

    taskList.appendChild(taskItem)
    taskForm.reset()
  })
});
