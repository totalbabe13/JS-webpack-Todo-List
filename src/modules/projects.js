console.log("APP_STATE", window.APP_STATE);

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
    projectContainer.addEventListener("submit",getProjectInput);
    projectView.appendChild(projectContainer);

    //project text description
    let projectDescription = document.createElement("input");
    projectDescription.className = "project-content";
    projectDescription.setAttribute("name","project-title-x");
    projectDescription.setAttribute("placeholder","Type in Project Title...")
    projectDescription.setAttribute("required","")
    projectContainer.appendChild(projectDescription);

    // delete project Button
    let deleteDiv = document.createElement("div");
    deleteDiv.className = "delete-project-div";
    projectContainer.appendChild(deleteDiv);
    let deleteButton = document.createElement("p");
    deleteButton.className = "project-remove";
    // deleteButton.onclick = cancelForm;
    deleteButton.textContent = "+";
    deleteDiv.appendChild(deleteButton);

    //Project details and add details button
    let addDetailField = document.createElement("input");
    addDetailField.setAttribute("placeholder","Type in Project detail...")
    addDetailField.setAttribute("name","project-details-x");
    addDetailField.className = "project-detail-div";
    projectContainer.appendChild(addDetailField);

    let addProjectDetail = document.createElement("div")
    addProjectDetail.id = "add-project-detail";
    let addDetail = document.createElement('p');
    addDetail.onclick = createNewDetailField;
    addDetail.className = "add-detail";
    addDetail.textContent = "+";
    addProjectDetail.appendChild(addDetail);
    projectContainer.appendChild(addProjectDetail);

    // Save button
    let saveProject = document.createElement("input");
    saveProject.className = "project-save";
    saveProject.setAttribute("type","submit");
    saveProject.setAttribute("value","Save");
    projectContainer.appendChild(saveProject);
    // console.log("createItemForm has run")


})

function createNewDetailField(){
  let projectContainer = document.getElementById("project-container");
  let addButtonContainer = document.getElementById("add-project-detail");
  let addDetailField = document.createElement("input");
  addDetailField.setAttribute("placeholder","Type in Project detail...")
  addDetailField.setAttribute("name","project-details-x");
  addDetailField.className = "project-detail-div";
  console.log(addButtonContainer);
  projectContainer.insertBefore(addDetailField,addButtonContainer);

}

function getProjectInput(event){
   event.preventDefault();
    let projectTitle   = document.querySelector('[name=project-title-x]').value;
    let projectDetails = document.getElementsByClassName("project-detail-div");
   console.log("inside getProjectInput")
   // console.log(projectDetails);
   for (var i = 0; i < projectDetails.length; i++) {
     var item = projectDetails[i];
     console.log(projectDetails[i].value)
   }
}


export {showFormforProject}
