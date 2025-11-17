const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const body = document.body;


botao.addEventListener("click", () => {
    // Verifica se o modo atual é claro
    if (body.classList.contains("claro")) {
        // Troca para o modo escuro
        body.classList.replace("claro", "escuro");
        titulo.textContent = "Modo Escuro ";
        botao.textContent = "Ativar modo claro ";
    } else {
        // Troca para o modo claro
        body.classList.replace("escuro", "claro");
        titulo.textContent = "Modo Claro ";
        botao.textContent = "Ativar modo escuro "
    }
});