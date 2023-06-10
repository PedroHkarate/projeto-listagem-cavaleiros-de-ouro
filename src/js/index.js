//Pegando o Botão de Alterar Tema Do html
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Selecionando o Body do html
const body = document.querySelector("body");

//Variável para receber a imagem durante a troca de tema
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

//Verificando o click em cima do botão de Alterar Tema
botaoAlterarTema.addEventListener("click", () => {
    //Criação de Variável para ver se o body está com a classe "Modo Escuro" (Ver se o modo escuro está ativo) 
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    
    //Alternando entre modo claro e escuro
    body.classList.toggle("modo-escuro")

    //Verificar se o modo escuro está ativo
    if (modoEscuroAtivo) {
        //Removendo o modo escuro -> body.classList.remove("modo-escuro");
        //Alterando a imagem da lua para o sol
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/Sol.png");
    }
    else {
        //Adicionando o modo escuro -> body.classList.add("modo-escuro");
        //Alterando a imagem do sol para a lua
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/Lua.png");
    }
});