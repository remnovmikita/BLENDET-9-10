import{n as f}from"./assets/vendor-OxPLOBIU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l({taskName:r,taskDescription:s,id:o}){return`
  <li class="task-list-item" data-id=${o}>
  <button class="task-list-item-btn">Delete</button>
        <h3>${r}</h3>
        <p>${s}</p>
  </li>
  `}function d(r){return r.map(l).join("")}const i={form:document.querySelector("#task-form"),taskList:document.querySelector("#task-list")},u="tasksLists";let c=JSON.parse(localStorage.getItem(u))??[];i.taskList.insertAdjacentHTML("beforeend",d(c));i.form.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.taskName.value,o=r.target.elements.taskDescription.value,n={taskName:s,taskDescription:o,id:f()};i.taskList.insertAdjacentHTML("beforeend",l(n)),i.form.reset(),c.push(n),localStorage.setItem(u,JSON.stringify(c))});
//# sourceMappingURL=index.js.map
