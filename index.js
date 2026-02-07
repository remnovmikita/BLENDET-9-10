import{n as a}from"./assets/vendor-OxPLOBIU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function l({taskName:s,taskDescription:r,id:o}){return`
  <li class="task-list-item" data-id=${o}>
  <button class="task-list-item-btn">Delete</button>
        <h3>${s}</h3>
        <p>${r}</p>
  </li>
  `}const c={form:document.querySelector("#task-form"),taskList:document.querySelector("#task-list")};c.form.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.taskName.value,o=s.target.elements.taskDescription.value,i={taskName:r,taskDescription:o,id:a()};c.taskList.insertAdjacentHTML("beforeend",l(i)),form.reset()});
//# sourceMappingURL=index.js.map
