const test = (() => {
   let add_button = document.getElementsByClassName('add-button')[0];
   add_button.onclick = createItemForm
   console.log(add_button)
})

const createItemForm =(()=>{
  // list item container
  let listView = document.getElementById("todo-view");
  let addButton = document.getElementById("add-todo");
  let itemContainer = document.createElement("form");
  itemContainer.className ="todo-item";
  listView.appendChild(itemContainer);

  //check mark structure
  let checkMarkContainer = document.createElement("div");
  checkMarkContainer.className ="check-mark-container";
  itemContainer.appendChild(checkMarkContainer);

  //check mark Button
  let checkMarkButton = document.createElement("input");
  checkMarkButton.setAttribute("type","Button");
  checkMarkButton.className = "completed";
  checkMarkContainer.appendChild(checkMarkButton);

  //todo text description
  let todoDescription = document.createElement("input");
  todoDescription.className = "todo-content";
  todoDescription.setAttribute("placeholder","Type in description")
  itemContainer.appendChild(todoDescription);

  //todo date set
  let date =document.createElement("input");
  date.className = "todo-date";
  date.setAttribute("type","date");
  itemContainer.appendChild(date);

  //todo priority level(red, orange, yellow);
  let priority = document.createElement("div");
  priority.className = "todo-priority";
  itemContainer.appendChild(priority);

  let priorityToggle = document.createElement("input");
  priorityToggle.setAttribute("type","button")
  priorityToggle.className = "todo-priority-set";
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

  //notes text field
  let notes = document.createElement("input");
  notes.className = "todo-notes";
  notes.setAttribute("type","button");
  notes.setAttribute("value","Add Notes");
  itemContainer.appendChild(notes);

  let saveItem = document.createElement("input");
  saveItem.className = "todo-save";
  saveItem.setAttribute("type","button");
  saveItem.setAttribute("value","Save");
  itemContainer.appendChild(saveItem);

  console.log(listView)
})
export { test };
