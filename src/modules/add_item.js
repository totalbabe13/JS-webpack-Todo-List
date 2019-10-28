const test = (() => {
   let add_button = document.getElementsByClassName('add-button')[0];
   add_button.onclick = createItemForm
   console.log("add_button created")
})
// Saving building Item ?
const testSaving = ((event) => {
   event.preventDefault();
   // console.log(event);
   console.log("inside Test Saving ")
   let descriptionValue = document.querySelector('[name=description-x]').value;
   let dateValue = document.querySelector('[name=date-x]').value;
   console.log(descriptionValue);
   console.log(dateValue);
})

const createItemForm =(()=>{
  // list item container
  let listView = document.getElementById("todo-view");
  let addButton = document.getElementById("add-todo");
  let itemContainer = document.createElement("form");
  itemContainer.className ="todo-item";
  itemContainer.addEventListener("submit",testSaving);
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
  itemContainer.appendChild(todoDescription);

  //todo date set
  let date =document.createElement("input");
  date.className = "todo-date";
  date.setAttribute("type","date");
  date.setAttribute("name","date-x");
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
  deleteButton.setAttribute("type","button");
  deleteButton.setAttribute("value","+");
  deleteDiv.appendChild(deleteButton);

  //NOTES text field toggle button
  let notes = document.createElement("input");
  notes.className = "todo-notes";
  notes.setAttribute("type","button");
  notes.setAttribute("value","Add Notes");
  itemContainer.appendChild(notes);

  //SAVE button
  let saveItem = document.createElement("input");
  saveItem.className = "todo-save";
  saveItem.setAttribute("type","submit");
  saveItem.setAttribute("value","Save");
  itemContainer.appendChild(saveItem);

  console.log("listView has run")
})

const changePriority = (() => {
  let priorityButton = document.querySelector('[name=priority-x]');
  let priorityState  = priorityButton.dataset.priority
  console.log(priorityButton);
  console.log(priorityState);

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
  console.log(priorityState);
})

// ToDo item Constructor
function TodoItem(isFinished, description, priority, date, notes) {
    this.isFinished = false
    this.description = description
    this.date = date
    this.priority = priority
    this.notes = notes
};




export { test };
