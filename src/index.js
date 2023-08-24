document.addEventListener("DOMContentLoaded", () => {
// const task = document.getElementById()

  const submit = document.getElementById("create-task-form");
  const task = document.getElementById("new-task-description");
  // const newTaskPriority = document.getElementById("new-task-priority");
  
function addToList() {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = "x";
  li.textContent = task.value;
  list.append(li);
  li.append(button);
  
  task.value = "";
  // button deleting data
  button.addEventListener("click", () => {
    li.remove();
  })

}  
// newTaskForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   taskList.createNewTask(newTaskDescription.value);
//   // reseting form
//   e.target.reset();
// });

function removeList() {
  li.remove();
}
function newSubmit(submit) {
  addToList();
  submit.preventDefault();
}

submit.addEventListener('submit', newSubmit)
});
