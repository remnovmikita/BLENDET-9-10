import { nanoid } from 'nanoid'
import { createMarkup, createMarkupList} from './js/markup-tasks';
import { refs } from './js/refs';


const KEY_OBJ = "tasksLists";
let array = JSON.parse(localStorage.getItem(KEY_OBJ)) ?? [];
refs.taskList.insertAdjacentHTML("beforeend", createMarkupList(array));

refs.taskList.addEventListener("click", e => {
    if(!e.target.classList.contains("task-list-item-btn"))return;
    const findLi = e.target.closest("[data-id]");
    const id = findLi.dataset.id;
    // console.log(id)
    const x = array.filter((item) => item.id !== id);
    localStorage.setItem(KEY_OBJ, JSON.stringify(x));
    findLi.remove();

})


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




