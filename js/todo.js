const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDOLIst = document.getElementById("todo-list");

const TODO_KEY = "todos";

function savetoDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  console.log(toDos);
  savetoDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  li.classList.add("todo-li");
  const div = document.createElement("div");
  div.classList.add("todo-div");
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  div.appendChild(span);
  div.appendChild(button);
  li.appendChild(div);
  toDOLIst.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savetoDos();
}

let toDos = [];
toDoFrom.addEventListener("submit", handleToDoSubmit);
const savedtoDos = localStorage.getItem(TODO_KEY);

if (savedtoDos !== null) {
  const parsedtoDos = JSON.parse(savedtoDos);
  parsedtoDos.forEach(paintToDo);
  toDos = parsedtoDos;
}
