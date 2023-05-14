// Alterar tema e icone de sol e lua
const mudarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const iconeTrocaTema = document.querySelector(".imagem-botao");

iconeTrocaTema.addEventListener("click", () => {

    body.classList.toggle("modo-escuro");

    if(body.classList.contains("modo-escuro")){
        iconeTrocaTema.setAttribute("src", "./src/imgs/sun.png");
    } else {
        iconeTrocaTema.setAttribute("src", "./src/imgs/moon.png");
    }
});