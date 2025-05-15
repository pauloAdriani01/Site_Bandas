//Funcionamento do Botão de Pesquisa

const obj_botao_pesquisa = document.querySelector("#botao_pesquisa");

obj_botao_pesquisa.addEventListener("click", funPesquisa);

function funPesquisa() {
    alert("Pequisando...");
    location.reload();
}

//Funcionamento do Botão de "Carregar Mais"

const obj_botao_mais = document.querySelector("#botao_mais");

obj_botao_mais.addEventListener("click", funMais);

function funMais() {
    alert("Carregando mais notícias...");
}