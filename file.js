
 document.querySelector('form').addEventListener('submit',(e) => {
    let form = document.querySelector('form')
    event.preventDefault();
    handleTodo(e.target.newtask.value)
    // resets form once one adds a task
    form.reset()
})

function handleTodo(todo){
//   creating a new paragraph to take out tasks lists
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click',handledelete)
    btn.innerHTML = ' Delete';
    p.textContent = todo
    p.appendChild(btn)
    document.querySelector('#taskstodo').appendChild(p);


}

function handledelete(e){
    e.target.parentNode.remove()

}