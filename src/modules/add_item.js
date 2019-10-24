const test = (() => {
   let add_button = document.getElementsByClassName('add-button')[0];
   add_button.onclick = createFormModal
   console.log(add_button)
})

const createFormModal =(()=>{
  console.log("inside createFormModal")
})
export { test };
