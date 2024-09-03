function todos(){
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    console.log(todos)
}

document.addEventListener("DOMContentLoaded" , () => {
    todos()
})