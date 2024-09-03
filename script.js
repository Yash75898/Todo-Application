function loadTodos(){
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []}
    console.log(todos)
    return todos
}

function addTodoToLocalStorage(todoText){
    const todos = loadTodos()
    todos.todoList.push(todoText)
    localStorage.setItem("todos" , JSON.stringify(todos))
}

document.addEventListener("DOMContentLoaded" , () => {
let todoInput = document.getElementById("todoInput");
let submitButton = document.getElementById("addTodo");

submitButton.addEventListener("click" , (event) => {
    const todoText = todoInput.value

    if(todoText == ''){
        alert("Empty String")
    }
    else{
        addTodoToLocalStorage(todoText)
    }
})


todoInput.addEventListener("change" , (event) => {
    const todoText = event.target.value
    event.target.value = todoText.trim()
})


    loadTodos()
})

console.log("yash")