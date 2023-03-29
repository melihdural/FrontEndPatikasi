let storedElements = []

let closebtns = document.getElementsByClassName("close");
let button = document.querySelector("#addButton")
let i;

const toDoList = document.querySelector("#toDoList")

button.addEventListener("click", function() {
    let toDoInputDOM = document.querySelector('#toDoItem')
    CheckInput(toDoInputDOM)
})

SetButtonsToStorage();

function SetButtonsToStorage () {
    for (i = 0; i < closebtns.length; i++) {
        closebtns[i].addEventListener("click", AddCloseEvent);
        storedElements.push(closebtns[i].parentElement.innerHTML)
        localStorage.setItem('storedElements', JSON.stringify(storedElements));
    }
}

function AddCloseEvent (){
    let taskList = document.getElementById("toDoList") 
    let removedChild = this.parentElement;
    taskList.removeChild(removedChild);

    storedElements.splice(storedElements.indexOf(removedChild.innerHTML),1)

    localStorage.setItem('storedElements', JSON.stringify(storedElements));
    console.log(storedElements.length)
}   

function ResetTaskList () {
    let taskList = document.getElementById("toDoList")
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function CheckInput (task) {
    if (task.value.length > 0) {
        try {
            let liDOM = document.createElement('li');
            liDOM.className = "list-group-item";
            liDOM.innerHTML = ` 
            ${task.value}
            `;
            
            let closeButtonDom = document.createElement(`span`)
            closeButtonDom.className = "close";
            closeButtonDom.addEventListener("click", AddCloseEvent)
            closeButtonDom.innerHTML = "x";

            liDOM.append(closeButtonDom);
            toDoList.append(liDOM);

            storedElements.push(liDOM.innerHTML);
            
            localStorage.setItem('storedElements', JSON.stringify(storedElements));
            $('.success').toast('show');
            task.value = "";
        }
        catch {
            console.error("Error");
        } 
    }
}
