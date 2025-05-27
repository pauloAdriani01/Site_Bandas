//Funcionamento do Botão de Pesquisa (Todas as Páginas)

const obj_botao_pesquisa = document.querySelector("#botao_pesquisa");

obj_botao_pesquisa.addEventListener("click", funPesquisa);

function funPesquisa() {
    alert("Pesquisando...");
    location.reload();
}

//Funcionamento do Botão "Carregar Mais" (Notícias, Posts e Bandas)

// const obj_botao_mais = document.querySelector("#botao_mais");
// const pag_ativa = window.location.pathname();

// obj_botao_mais.addEventListener("click", funCarregarMais);

// function funCarregarMais() {
    
// }

//Funcionamento dos Links para Redes Sociais (Todas as Páginas)

const array_rede_click = document.querySelectorAll(".rede_click"); //Pega todos os meus links na classe

array_rede_click.forEach(obj_rede_click => { //Aplica o "eventListener" em cada link
    obj_rede_click.addEventListener("click", funRede);
});

function funRede() {
    alert("Redirecionando para a rede social...");
}