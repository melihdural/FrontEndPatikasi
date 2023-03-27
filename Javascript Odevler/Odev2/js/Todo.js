// Get all elements with class="close"
let closebtns = document.getElementsByClassName("close");
let i;

// Loop through the elements, and hide the parent, when clicked on
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", AddCloseEvent);
}

function AddCloseEvent (){
  this.parentElement.style.display = 'none';
    // TODO clean on local storage
}   


let button = document.querySelector("#addButton")

const toDoList = document.querySelector("#toDoList")

button.addEventListener("click", function() {
    let toDoInputDOM = document.querySelector('#toDoItem')
    console.log(toDoInputDOM.value)

    CheckInput(toDoInputDOM)
})

function CheckInput (task) {
    if (task.value.length > 0) {
        try {
            let liDOM = document.createElement('li');
            liDOM.className = "list-group-item";
            liDOM.innerHTML = `${task.value}`;
            
            let closeButtonDom = document.createElement(`span`)
            closeButtonDom.className = "close";
            closeButtonDom.addEventListener("click", AddCloseEvent)
            closeButtonDom.innerHTML = "x";

            liDOM.append(closeButtonDom);
            toDoList.append(liDOM);
            /* kaydedilenler.push(liDOM.innerHTML);
            localStorage.setItem('kaydedilenler', JSON.stringify(kaydedilenler));
            $('.success').toast('show'); */
            task.value = "";
        }
        catch {
            console.error("Error");
        } 
        console.log("calistim")
    }
}
