//------------------ Seleção de elementos----------//
const todoform = document.querySelector("#todo-form"); // SELECIONA OS ELELMENTOS DO HTML EX: TODO-FORM
const todoInput = document.querySelector("#todo-input");// SELECIONA OS ELELMENTOS DO HTML
const todoList = document.querySelector("#todo-list");// SELECIONA OS ELELMENTOS DO HTML
const editform = document.querySelector("#edit-form");// SELECIONA OS ELELMENTOS DO HTML
const editInput = document.querySelector("#edit-input");// SELECIONA OS ELELMENTOS DO HTML
const cancelEditiBtn= document.querySelector("#cancel-edit-btn");// SELECIONA OS ELELMENTOS DO HTML

let oldInputValue;
// ---------------------Funções-------------------//
const saveTodo = (text) => {  

    const todo = document.createElement("div")
    todo.classList.add("todo") //cria uma div 

    const todoTitle = document.createElement("h3") //cria um h3 com o texto adicionado no input
    todoTitle.innerText = text
    todo.appendChild(todoTitle);

//--------------Cria Botões-----------------//
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' //cria um icone dentro do botão
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
    todoInput.focus(); //deixa o cursor dentro do Input(caixa de testo). Pronto para proxima tarefa.
    
};

const toggleForms = () => {
    editform.classList.toggle("hide");
    todoform.classList.toggle("hide");
    todoList.classList.toggle("hide");
  }

const updateTodo = (text) => {

  const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
      
      let todoTitle = todo.querySelector("h3")

      if(todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = text;
      }
    })


}

// ------------------Eventos------------------//
todoform.addEventListener("submit", (e) => {   //QUANDO ENVIAR O FORMULARIO
    e.preventDefault();

   const inputValue = todoInput.value; //pega o valor do input que o usuario digita 

   if (inputValue) {
     saveTodo(inputValue);
   }

});



document.addEventListener("click", (e) => {

  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if(parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  if (targetEl.classList.contains("finish-todo")) {
   parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("remove-todo")){
    parentEl.remove();
  }
  
  if (targetEl.classList.contains("edit-todo")){
    toggleForms();

    editInput.Value = todoTitle
    oldInputValue = todoTitle
  }

});

cancelEditiBtn.addEventListener("click", (e) => {
  e.preventDefault()

  toggleForms();
});

editform.addEventListener("submit", (e) => {

  e.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue) {
    updateTodo(editInputValue)//atualiza
  }

  toggleForms()

})