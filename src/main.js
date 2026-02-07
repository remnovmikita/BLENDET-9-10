import { nanoid } from 'nanoid'
import { createMarkup, createMarkupList} from './js/markup-tasks';
import { refs } from './js/refs';


const KEY_OBJ = "tasksLists";
let array = JSON.parse(localStorage.getItem(KEY_OBJ)) ?? [];
refs.taskList.insertAdjacentHTML("beforeend", createMarkupList(array));




refs.form.addEventListener("submit", e =>{
e.preventDefault();

const taskName = e.target.elements.taskName.value;
const taskDescription = e.target.elements.taskDescription.value;

const obj = {taskName, taskDescription, id:nanoid()};


refs.taskList.insertAdjacentHTML("beforeend", createMarkup(obj))

  refs.form.reset();
  array.push(obj);
  localStorage.setItem(KEY_OBJ, JSON.stringify(array));
})




