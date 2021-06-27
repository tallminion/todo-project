// SELECTORS
const todoInput = document.querySelector(".todo-Input");
const todoButton = document.querySelector(".todo-Button");
const todoList = document.querySelector(".todo-List");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);

//FUNCTIONS
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innertext = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //CHECK Trash BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
}
