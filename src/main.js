import { nanoid } from 'nanoid'
import { createMarkup } from './js/markup-tasks';
import { refs } from './js/refs';





refs.form.addEventListener("submit", e =>{
e.preventDefault();

const taskName = e.target.elements.taskName.value;
const taskDescription = e.target.elements.taskDescription.value;

const obj = {taskName, taskDescription, id:nanoid()};


refs.taskList.insertAdjacentHTML("beforeend", createMarkup(obj))

form.reset();
})


