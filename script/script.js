// Seleção de elementos
const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditiBtn= document.querySelector("#cancel-edit-btn");

// Funções
const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

    console.log(todo);
}


// Eventos
todoform.addEventListener("submit", (e) => {
    e.preventDefault();

   const inputValue = todoInput.value;

   if (inputValue) {
     saveTodo(inputValue);
   }

});