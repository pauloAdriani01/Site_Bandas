// ------ Funcionamento do carrosel de notícias/posts ------

// --- Configuração das setas ---

//Criação dos Objetos
const array_seta_esquerda = document.querySelectorAll(".seta_esquerda");
const array_seta_direita = document.querySelectorAll(".seta_direita");

//Criação dos eventos
array_seta_esquerda.forEach(obj_seta_esquerda => {
    obj_seta_esquerda.addEventListener("click", funSetaEsquerda);
})

array_seta_direita.forEach(obj_seta_direita => {
    obj_seta_direita.addEventListener("click", funSetaDireita);
})

//Criação das funções
function funSetaEsquerda() {
    num_noticia--;
    if ( num_noticia < 0 ) {
        num_noticia = (noticias.length - 1)
    }
    funExibeNoticia(num_noticia);
}

function funSetaDireita() {
    num_noticia++;
    if (num_noticia == noticias.length) {
        num_noticia = 0;
    }
    funExibeNoticia(num_noticia);
}

// --- Configuração do Card de Notícias ---

//Criação dos Objetos e Variável
const obj_foto_noticia = document.querySelector("#foto_noticia");
const obj_prg_noticia = document.querySelector("#prg_noticia");

let num_noticia = 0;

function funExibeNoticia(num_noticia) {
    obj_foto_noticia.src = noticias[num_noticia].foto;
    obj_prg_noticia.innerHTML = noticias[num_noticia].titulo;
}

funExibeNoticia(0);

