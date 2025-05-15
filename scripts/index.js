//Funcionamento do Botão de Pesquisa

const obj_botao_pesquisa = document.querySelector("#botao_pesquisa");

obj_botao_pesquisa.addEventListener("click", funPesquisa);

function funPesquisa() {
    alert("Pequisando...");
    location.reload();
}