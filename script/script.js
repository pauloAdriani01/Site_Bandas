//Funcionamento do Botão de Pesquisa (Index, Notícias, Posts e Bandas)

const obj_botao_pesquisa = document.querySelector("#botao_pesquisa");

obj_botao_pesquisa.addEventListener("click", funPesquisa);

function funPesquisa() {
        alert("Pesquisando...");
        location.reload();
}


// Funcionamento do Botão "Carregar Mais" (Notícias, Posts e Bandas)

const pag_ativa = window.location.pathname.toLowerCase(); //Leitura da página ativa

if (pag_ativa.includes("noticias") || pag_ativa.includes("posts") || pag_ativa.includes("bandas")) {

    const obj_botao_mais = document.querySelector("#botao_mais");

    obj_botao_mais.addEventListener("click", funCarregarMais);

    function funCarregarMais() {
    
        if (pag_ativa.includes("noticias")) {
            alert("Carregando mais notícias...");

        } else if (pag_ativa.includes("posts")) {
            alert("Carregando mais posts...");

        } else if (pag_ativa.includes("bandas")) {
            alert("Carregando mais bandas...");

        }
    }

}

//Funcionamento dos Links para Redes Sociais (Index, Notícias, Posts e Bandas)

const array_rede_click = document.querySelectorAll(".rede_click"); //Pega todos os meus links na classe

array_rede_click.forEach(obj_rede_click => { //Aplica o "eventListener" em cada link
        obj_rede_click.addEventListener("click", funRede);
})

function funRede() {
        alert("Redirecionando para a rede social...");
}
