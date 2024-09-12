const toDoBtn = document.getElementById('addingbutton')
const toDoInput = document.getElementById('todoinput')


const setList = (e) => {
    addItem(toDoInput.value)
    setTimeout(() => toDoInput.value = '', 1);
}
const setList2 = (e) => {
    if (e.keyCode == '13') addItem(toDoInput.value) 
}

const addItem = (str) => {
    const content = document.querySelector('.content')

    let toDo = document.createElement('div')
    toDo.classList.add('to-do'),
    content.appendChild(toDo);

    let status = document.createElement('div')
    status.classList.add('status')
    toDo.appendChild(status)

    let h3text = document.createElement('p')
    h3text.textContent = str
    h3text.classList.add('nameof')
    toDo.appendChild(h3text)

    let statusDiv = document.createElement('div')
    statusDiv.setAttribute("class", "statusdiv")
    toDo.appendChild(statusDiv)

    let applyBtn = document.createElement('button')
    applyBtn.setAttribute("id", "applied")
    applyBtn.innerText = "✔"
    applyBtn.addEventListener('click', function (e) {
        status.style.backgroundColor = "green"
        h3text.style.textDecoration = "line-through"
        h3text.style.color = "darkgrey"
    })
    statusDiv.appendChild(applyBtn)

    let rejectBtn = document.createElement('button')
    rejectBtn.setAttribute("id", "rejected")
    rejectBtn.innerText = "❌"
    rejectBtn.addEventListener('click', function(e) {
        status.style.backgroundColor = "red"
        h3text.style.textDecoration = "line-through"
        h3text.style.color = "darkgrey"

    })
    statusDiv.appendChild(rejectBtn)
    

}



const clean = (e) => {
    if (e.keyCode == '13')
        setTimeout(() => toDoInput.value = '', 1);
}


toDoBtn.addEventListener('click', setList)
toDoInput.addEventListener('keypress', setList2)
toDoInput.addEventListener('keydown', clean)
