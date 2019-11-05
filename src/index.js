import { showFormforTodo } from './modules/add_item.js';
import { addToggles } from './modules/layout.js';
import { showFormforProject } from './modules/projects.js';

window.APP_STATE = {
  items: [],
  projects: []
}
showFormforProject();
showFormforTodo();
addToggles();
