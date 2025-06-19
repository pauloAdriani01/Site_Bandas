const pag_ativa = location.pathname.toLowerCase(); //Leitura da página ativa

//Funcionamento do Botão de Pesquisa (Index, Notícias, Posts e Bandas)

if (pag_ativa.includes("index") || pag_ativa.includes("noticias") || pag_ativa.includes("posts") || pag_ativa.includes("bandas")) {
    const obj_botao_pesquisa = document.querySelector("#botao_pesquisa");

    obj_botao_pesquisa.addEventListener("click", funPesquisa);

    function funPesquisa() {
            alert("Pesquisando...");
            location.reload();
    }
}

//Funcionamento do Botão de "Pesquisar" no "Corpo" da paágina (Notícias, Posts e Bandas)

if (pag_ativa.includes("noticias") || pag_ativa.includes("posts") || pag_ativa.includes("bandas")) {
    const obj_botao_pesquisa_corpo = document.querySelector("#botao_pesquisa_corpo");

    obj_botao_pesquisa_corpo.addEventListener("click", funPesquisaCorpo);

    function funPesquisaCorpo() {
        if (pag_ativa.includes("noticias")) {
            alert("Pesquisando mais notícias...");
            location.reload();

        } else if (pag_ativa.includes("posts")) {
            alert("Pesquisando mais posts...");
            location.reload();  

        } else if (pag_ativa.includes("bandas")) {
            alert("Pesquisando mais bandas...");
            location.reload();

        }
    }

}

// Funcionamento do Botão "Carregar Mais" (Notícias, Posts e Bandas)

if (pag_ativa.includes("noticias") || pag_ativa.includes("posts") || pag_ativa.includes("bandas")) {
    const obj_botao_mais = document.querySelector("#botao_mais");

    obj_botao_mais.addEventListener("click", funCarregarMais);

    function funCarregarMais() {
        if (pag_ativa.includes("noticias")) {
            alert("Carregando mais notícias...");
            location.reload();

        } else if (pag_ativa.includes("posts")) {
            alert("Carregando mais posts...");
            location.reload();

        } else if (pag_ativa.includes("bandas")) {
            alert("Carregando mais bandas...");
            location.reload();

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

//Funcionamento do Botão de "Login" + Botão de "Criar Conta" (Login)

if (pag_ativa.includes("login")) {
    const obj_botao_login = document.querySelector("#botao_login");
    const obj_botao_criarConta = document.querySelector("#botao_criarConta");

    obj_botao_login.addEventListener("click", funLogin);
    obj_botao_criarConta.addEventListener("click", funCriarConta);

    function funLogin() {
        alert("Realizando seu login...");
        location.reload();
    }

    function funCriarConta() {
        alert("Redirecionando para a página de criar conta...");
        location.reload();
    }

}

//Funcionamento do "click" nas bandas da tabela (Bandas)

if (pag_ativa.includes("bandas")) {
    const array_bandas = document.querySelectorAll(".banda");

    array_bandas.forEach(obj_banda => {
        obj_banda.addEventListener("click", funBanda);
    });

    function funBanda() {
        alert("Redirecionando para a página da banda...");
        location.reload();
    }
}