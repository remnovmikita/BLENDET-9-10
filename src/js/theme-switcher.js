import { refs } from "./refs";

refs.buttonTheme.addEventListener("click", e => {
    if(document.body.classList.contains("theme-light")){
        document.body.classList.add("theme-dark");
        document.body.classList.remove("theme-light");
    }else{
        document.body.classList.add("theme-light");
        document.body.classList.remove("theme-dark");
    }
})