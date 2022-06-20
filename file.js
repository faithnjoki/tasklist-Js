
document.querySelector('form').addEventListener('submit',(e) => {
    event.preventDefault();
    handleTodo(e.target.newtask.value)
})

function handleTodo(todo){
//   creating a new paragraph to take out tasks lists
    let p = document.createElement('p');
    p.textContent = todo
    console.log(p)
    document.querySelector('#taskstodo').appendChild(p)


}