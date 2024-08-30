//------------------ Seleção de elementos----------//
const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditiBtn= document.querySelector("#cancel-edit-btn");

// ---------------------Funções-------------------//
const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

    //--------------Cria Botões-----------------//
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)
    
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deletBtn = document.createElement("button")
    deletBtn.classList.add("remove-todo")
    deletBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deletBtn)
    
    todoList.appendChild(todo);
    
    todoInput.value = ""; //deixa o Input vazio após criar a tarefa
    todoInput.focus(); //deixa o cursor dentro do Input(caixa de testo)
    
};


// ------------------Eventos------------------//
todoform.addEventListener("submit", (e) => {
    e.preventDefault();

   const inputValue = todoInput.value;

   if (inputValue) {
     saveTodo(inputValue);
   }

});