//Funcionamento dos Links para Redes Sociais

const array_rede_click = document.querySelectorAll(".rede_click"); //Pega todos os meus links na classe

array_rede_click.forEach(obj_rede_click => { //Aplica o "eventListener" em cada link
    obj_rede_click.addEventListener("click", funRede);
});

function funRede() {
    alert("Redirecionando para a rede social...");
}