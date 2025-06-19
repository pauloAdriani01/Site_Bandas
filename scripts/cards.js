// ------ Funcionamento do carrosel de notícias/posts ------

// --- Configuração das setas ---

//Criação dos Objetos
const obj_seta_esquerda = document.querySelector("#seta_esquerda_noticia");
const obj_seta_direita = document.querySelector("#seta_direita_noticia");

//Criação dos eventos
obj_seta_esquerda.addEventListener("click", funSetaEsquerdaNoticia);
obj_seta_direita.addEventListener("click", funSetaDireitaNoticia);


//Criação das funções
function funSetaEsquerdaNoticia() {
    num_noticia--;
    if ( num_noticia < 0 ) {
        num_noticia = (noticias.length - 1)
    }
    funExibeNoticia(num_noticia);
}

function funSetaDireitaNoticia() {
    num_noticia++;
    if (num_noticia == noticias.length) {
        num_noticia = 0;
    }
    funExibeNoticia(num_noticia);
}

// --- Configuração do Card de Notícias ---

//Criação dos Objetos e Variável
const obj_foto_noticia = document.querySelector("#foto_noticia");
const obj_titulo_noticia = document.querySelector("#titulo_noticia");
const obj_prg_noticia = document.querySelector("#prg_noticia");

let num_noticia = 0;

function funExibeNoticia(num_noticia) {
    obj_foto_noticia.src = noticias[num_noticia].foto;
    obj_titulo_noticia.innerHTML = noticias[num_noticia].titulo;
    obj_prg_noticia.innerHTML = noticias[num_noticia].sub;
}

funExibeNoticia(num_noticia);

