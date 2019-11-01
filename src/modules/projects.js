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

    //project text description
    let projectDescription = document.createElement("input");
    projectDescription.className = "project-content";
    projectDescription.setAttribute("name","description-x");
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
    addProjectDetail.className = "add-project-detail";
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
  console.log("inside createNewDetailField");
}


export {showFormforProject}
