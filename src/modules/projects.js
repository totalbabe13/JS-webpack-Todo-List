const showFormforProject = (() => {
   let addProjectBttnContainer = document.getElementById("add-project");
   let addButton = addProjectBttnContainer.childNodes[1]
    addButton.onclick = createProjectForm;

   console.log(addButton);
})

const createProjectForm = (() => {
  console.log("inside createProjectForm");
  // let projectFormpPresent = document.getElementById("project-item");
  //ONLY opens one Form at a time
  // if (projectFormpPresent === null){
    // list item container
    let projectView = document.getElementById("project-view");
    let addButton = document.getElementById("add-project");
    let projectContainer = document.createElement("form");
    projectContainer.id ="project-container";
    // projectContainer.addEventListener("submit",getUserInput);
    projectView.appendChild(projectContainer);

    //check mark structure
    let checkMarkContainer = document.createElement("div");
    checkMarkContainer.className ="check-mark-container";
    projectContainer.appendChild(checkMarkContainer);

    //check mark Button
    let checkMarkButton = document.createElement("input");
    checkMarkButton.setAttribute("type","Button");
    checkMarkButton.setAttribute("name","completed-x")
    checkMarkButton.className = "completed";
    checkMarkContainer.appendChild(checkMarkButton);

    // //project text description
    // let projectDescription = document.createElement("input");
    // projectDescription.className = "project-content";
    // projectDescription.setAttribute("name","description-x");
    // projectDescription.setAttribute("placeholder","Type in description")
    // projectDescription.setAttribute("required","")
    // projectContainer.appendChild(projectDescription);
    //
    // //todo date set
    // let date =document.createElement("input");
    // date.className = "project-date";
    // date.setAttribute("type","date");
    // date.setAttribute("name","date-x");
    // date.setAttribute("required","")
    // projectContainer.appendChild(date);
    //
    // //todo priority level(red, orange, yellow);
    // let priority = document.createElement("div");
    // priority.className = "todo-priority";
    // itemContainer.appendChild(priority);
    //
    // let priorityToggle = document.createElement("input");
    // priorityToggle.setAttribute("type","button")
    // priorityToggle.setAttribute("name","priority-x");
    // priorityToggle.setAttribute("data-priority","normal")
    // priorityToggle.className = "todo-priority-set";
    // // priorityToggle.onclick = changePriority;
    // priority.appendChild(priorityToggle);
    //
    // // delete item Button
    // let deleteProject = document.createElement("div");
    // deleteProject.className = "project-delete";
    // projectContainer.appendChild(deleteProject);
    //
    // let deleteDiv = document.createElement("div");
    // deleteDiv.className = "delete-icon";
    // deleteItem.appendChild(deleteDiv);
    //
    // let deleteButton = document.createElement("input");
    // deleteButton.className = "project-remove";
    // // deleteButton.onclick = cancelForm;
    // deleteButton.setAttribute("type","button");
    // deleteButton.setAttribute("value","+");
    // deleteDiv.appendChild(deleteButton);
    //
    // //NOTES text field toggle button
    // let notes = document.createElement("input");
    // notes.className = "project-notes";
    // notes.setAttribute("type","text");
    // notes.setAttribute('name', "notes-x");
    // notes.setAttribute("placeholder","Add Notes here :)");
    // // notes.onclick = addNotes;
    // itemContainer.appendChild(notes);
    //
    // //SAVE button
    // let saveProject = document.createElement("input");
    // saveproject.className = "todo-save";
    // saveproject.setAttribute("type","submit");
    // saveproject.setAttribute("value","Save");
    // projectContainer.appendChild(saveproject);
    // // console.log("createItemForm has run")
  // }

})


export {showFormforProject}
