

const addToggles = (() => {
  // console.log("inside addToggles()");
  let todoTab    = document.getElementById("todo-tab");
  let projectTab = document.getElementById("project-tab");
  todoTab.setAttribute("data-display","on");
  projectTab.setAttribute("data-display","off");
  todoTab.onclick = toggleLayout;
  projectTab.onclick = toggleLayout;

})

function toggleLayout() {
  // console.log("inside togglelayout()");
  let todoviewer = document.getElementById("todo-view")
  let todoTab    = document.getElementById("todo-tab")
  let projectTab = document.getElementById("project-tab")
  let projectviewer  = document.getElementById("project-view")
  let displayTodo    = todoTab.dataset.display
  let displayProject = projectTab.dataset.display
  if(displayTodo === "on"){
    todoviewer.style.display = "none";
    todoTab.dataset.display = "off";
    projectviewer.style.display = "grid";
    projectTab.dataset.display = "on";

  } else if (displayProject === "on") {
    todoviewer.style.display = "grid";
    todoTab.dataset.display = "on";
    projectviewer.style.display = "none";
    projectTab.dataset.display = "off";

  }
}

export { addToggles };
