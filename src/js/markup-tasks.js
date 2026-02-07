export function createMarkup ({taskName, taskDescription, id}) {
  return `
  <li class="task-list-item" data-id=${id}>
  <button class="task-list-item-btn">Delete</button>
        <h3>${taskName}</h3>
        <p>${taskDescription}</p>
  </li>
  `
}