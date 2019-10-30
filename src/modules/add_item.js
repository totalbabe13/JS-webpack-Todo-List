

const showFormforTodo = (() => {
   let add_button = document.getElementsByClassName('add-button')[0];
   add_button.onclick = createItemForm
})
// Saving building Item
const getUserInput = ((event) => {
   event.preventDefault();
   console.log("inside Test Saving ")
   //CREATE object
   let descriptionValue = document.querySelector('[name=description-x]').value;
   let dateValue  = document.querySelector('[name=date-x]').value;
   let priorityValue = document.querySelector('[name=priority-x]').dataset.priority;
   let notesValue = document.querySelector('[name=notes-x]').value;
   let userTodoItem = new TodoItem(descriptionValue, dateValue, priorityValue, notesValue)
   //convert Form
   //add checkMarkButton
   formatSavedItem(userTodoItem);
   return userTodoItem;

})

const createItemForm = (()=>{
  let itemFormpPresent = document.getElementById("todo-item");
  //ONLY opens one Form at a time
  if (itemFormpPresent === null){
    // list item container
    let listView = document.getElementById("todo-view");
    let addButton = document.getElementById("add-todo");
    let itemContainer = document.createElement("form");
    // itemContainer.className ="todo-item";
    itemContainer.id ="todo-item";
    itemContainer.addEventListener("submit",getUserInput);
    listView.appendChild(itemContainer);

    //check mark structure
    let checkMarkContainer = document.createElement("div");
    checkMarkContainer.className ="check-mark-container";
    itemContainer.appendChild(checkMarkContainer);

    //check mark Button
    let checkMarkButton = document.createElement("input");
    checkMarkButton.setAttribute("type","Button");
    checkMarkButton.setAttribute("name","completed-x")
    checkMarkButton.className = "completed";
    checkMarkContainer.appendChild(checkMarkButton);

    //todo text description
    let todoDescription = document.createElement("input");
    todoDescription.className = "todo-content";
    todoDescription.setAttribute("name","description-x");
    todoDescription.setAttribute("placeholder","Type in description")
    todoDescription.setAttribute("required","")
    itemContainer.appendChild(todoDescription);

    //todo date set
    let date =document.createElement("input");
    date.className = "todo-date";
    date.setAttribute("type","date");
    date.setAttribute("name","date-x");
    date.setAttribute("required","")
    itemContainer.appendChild(date);

    //todo priority level(red, orange, yellow);
    let priority = document.createElement("div");
    priority.className = "todo-priority";
    itemContainer.appendChild(priority);

    let priorityToggle = document.createElement("input");
    priorityToggle.setAttribute("type","button")
    priorityToggle.setAttribute("name","priority-x");
    priorityToggle.setAttribute("data-priority","normal")
    priorityToggle.className = "todo-priority-set";
    priorityToggle.onclick = changePriority;
    priority.appendChild(priorityToggle);

    // delete item Button
    let deleteItem = document.createElement("div");
    deleteItem.className = "todo-delete";
    itemContainer.appendChild(deleteItem);

    let deleteDiv = document.createElement("div");
    deleteDiv.className = "delete-icon";
    deleteItem.appendChild(deleteDiv);

    let deleteButton = document.createElement("input");
    deleteButton.className = "todo-remove";
    deleteButton.onclick = cancelForm;
    deleteButton.setAttribute("type","button");
    deleteButton.setAttribute("value","+");
    deleteDiv.appendChild(deleteButton);

    //NOTES text field toggle button
    let notes = document.createElement("input");
    notes.className = "todo-notes";
    notes.setAttribute("type","text");
    notes.setAttribute('name', "notes-x");
    notes.setAttribute("placeholder","Add Notes here :)");
    // notes.onclick = addNotes;
    itemContainer.appendChild(notes);

    //SAVE button
    let saveItem = document.createElement("input");
    saveItem.className = "todo-save";
    saveItem.setAttribute("type","submit");
    saveItem.setAttribute("value","Save");
    itemContainer.appendChild(saveItem);
    // console.log("createItemForm has run")
    } else {alert("You can only add One Item at a time!!");}
})
const formatSavedItem = ((userTodoItem) => {
  //replace form with div
  let currentform = document.getElementById("todo-item");
  let newContainer = document.createElement('div');
  newContainer.className = "todo-item"
  currentform.parentNode.replaceChild(newContainer,currentform);

  let checkMarkContainer = document.createElement("div");
  checkMarkContainer.className ="check-mark-container";
  newContainer.appendChild(checkMarkContainer);
  let checkMarkButton = document.createElement("button");
  checkMarkButton.className = "completed";
  checkMarkContainer.appendChild(checkMarkButton);

  let todoDescription = document.createElement("p");
  todoDescription.className = "todo-content-saved";
  todoDescription.textContent = userTodoItem.description;
  newContainer.appendChild(todoDescription);

  let date =document.createElement("p");
  date.className = "todo-date-saved";
  date.textContent = userTodoItem.date;
  newContainer.appendChild(date);

  let priority = document.createElement("div");
  priority.className = "todo-priority";
  newContainer.appendChild(priority);
  let priorityToggle = document.createElement("button");
  priorityToggle.setAttribute("name","priority-x");
  priorityToggle.setAttribute("data-priority","normal")
  priorityToggle.className = "todo-priority-set";
  priorityToggle.onclick = changePriority;
  priority.appendChild(priorityToggle);

  let deleteItem = document.createElement("div");
  deleteItem.className = "todo-delete";
  newContainer.appendChild(deleteItem);
  let deleteDiv = document.createElement("div");
  deleteDiv.className = "delete-icon";
  deleteItem.appendChild(deleteDiv);
  let deleteButton = document.createElement("input");
  deleteButton.className = "todo-remove";
  deleteButton.onclick = cancelForm;
  deleteButton.setAttribute("type","button");
  deleteButton.setAttribute("value","+");
  deleteDiv.appendChild(deleteButton);

  let notesSection = document.createElement("p");
  notesSection.className = "todo-notes-saved";
  notesSection.textContent = `Notes: ${userTodoItem.notes}`;
  newContainer.appendChild(notesSection);

  // let saveButton = document.getElementsByClassName("todo-save")[0];
  // console.log(saveButton)
})
const cancelForm = (()=> {
  document.getElementById("todo-view").removeChild(document.getElementById("todo-item"));
})
const changePriority = (() => {
  let priorityButton = document.querySelector('[name=priority-x]');
  let priorityState  = priorityButton.dataset.priority

  if(priorityState ==="normal"){
    priorityButton.setAttribute("data-priority","important")
    priorityButton.style.background ="yellow"
 } else if (priorityState ==="important"){
    priorityButton.setAttribute("data-priority","urgent")
    priorityButton.style.background ="red"
 } else if (priorityState === "urgent") {
    priorityButton.setAttribute("data-priority","normal")
    priorityButton.style.background ="green"
 }
})
// ToDo item Object Constructor
function TodoItem(description, date, priority, notes) {
    this.isFinished = false
    this.description = description
    this.date = date
    this.priority = priority
    this.notes = notes
};


export { showFormforTodo};
