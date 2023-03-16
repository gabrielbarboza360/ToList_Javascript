//Seleção de elementos

const adicionar = document.querySelector("#Container-Form-Adicione");
const valorAdicionado = document.querySelector("#input-adicione");
const ListaToda = document.querySelector("#todo-list");
const botaoCancel = document.querySelector("#button-cancelar");
const editor = document.querySelector("#Container-Form-Editar");
const editarInput = document.querySelector("#input-Editar");

let oldInputValue;



//funçoes

const saveTodo = (text) =>{

    const todo = document.createElement("div");
    todo.classList.add("todo");

   const todoTitle = document.createElement("h3");
   todoTitle.innerHTML = text;
   todo.appendChild(todoTitle);

   const DoneButton = document.createElement("button");
   DoneButton.classList.add("finish-todo");
   DoneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
   todo.appendChild(DoneButton);
   
   const EditButton = document.createElement("button");
   EditButton.classList.add("edit-todo")
   EditButton.innerHTML = '<i class="fa-solid fa-pen"></i>'
   todo.appendChild(EditButton);

   const DeleteButton = document.createElement("button");
   DeleteButton.classList.add("remove-todo")
   DeleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
   todo.appendChild(DeleteButton);


    ListaToda.appendChild(todo)
    valorAdicionado.value = "";
};


const esconderforumalrio = () => {
   adicionar.classList.toggle("hide");
   ListaToda.classList.toggle("hide");
   editor.classList.toggle("true");

};

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        console.log(todoTitle,text);  

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    });
};

//Eventos

adicionar.addEventListener("submit", (e) =>{
  
    e.preventDefault();

     const ValorInput = valorAdicionado.value
    
       if(ValorInput){
        saveTodo(ValorInput);
       }

});


// Criando evento dos botões de edições

document.addEventListener("click", (e) =>{

     const target = e.target;
     const parentEl = target.closest("div");
     let todoTitle;

     if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
     }

    if(target.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(target.classList.contains("edit-todo")){
        esconderforumalrio();

        editarInput.value = todoTitle;
        oldInputValue = todoTitle;
    }

       if(target.classList.contains("remove-todo")){
         parentEl.remove();
    }
});


botaoCancel.addEventListener("click", (e) =>{

    e.preventDefault();


    esconderforumalrio();

});

editor.addEventListener("submit", (e) =>{


      e.preventDefault();
      const editInputValue = editarInput.value
      
      if(editInputValue){
        updateTodo(editInputValue);
      }

      esconderforumalrio();
});