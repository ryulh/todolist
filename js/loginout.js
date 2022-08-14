const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const logoutForm = document.getElementById("logout-form");
const todo = document.getElementById("todo");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const name = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, name);
  showContents();
}

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODO_KEY);
}

function showContents() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.addEventListener("submit", onLogoutSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  showContents();
}
