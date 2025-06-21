// ------ Funcionamento do carrosel de notícias/posts ------

// --- Configuração das setas ---

//Criação dos Objetos
const obj_seta_esquerda_noticia = document.querySelector("#seta_esquerda_noticia");
const obj_seta_direita_noticia = document.querySelector("#seta_direita_noticia");

const obj_seta_esquerda_post = document.querySelector("#seta_esquerda_post");
const obj_seta_direita_post = document.querySelector("#seta_direita_post");

//Criação dos eventos
obj_seta_esquerda_noticia.addEventListener("click", funSetaEsquerdaNoticia);
obj_seta_direita_noticia.addEventListener("click", funSetaDireitaNoticia);

obj_seta_esquerda_post.addEventListener("click", funSetaEsquerdaPost);
obj_seta_direita_post.addEventListener("click", funSetaDireitaPost);


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

function funSetaEsquerdaPost() {
    num_post--;
    if (num_post < 0) {
        num_post = (posts.length - 1);
    }
    funExibePost(num_post);
}

function funSetaDireitaPost() {
    num_post++;
    if (num_post == posts.length) {
        num_post = 0;
    }
    funExibePost(num_post);
}

// --- Configuração do Card de Notícias ---

//Criação dos Objetos e Variável
const obj_foto_noticia = document.querySelector("#foto_noticia");
const obj_titulo_noticia = document.querySelector("#titulo_noticia");
const obj_prg_noticia = document.querySelector("#prg_noticia");

let num_noticia = 0;

//Função para exibir a notícia
function funExibeNoticia(num_noticia) {
    obj_foto_noticia.src = noticias[num_noticia].foto;
    obj_titulo_noticia.innerHTML = noticias[num_noticia].titulo;
    obj_prg_noticia.innerHTML = noticias[num_noticia].sub;
}

funExibeNoticia(num_noticia);

// --- Configuração do Card de Posts ---

//Criação dos Objetos e Variável
const obj_foto_post = document.querySelector("#foto_post");
const obj_titulo_post = document.querySelector("#titulo_post");
const obj_prg_post = document.querySelector("#prg_post");

const obj_foto_usuario = document.querySelector("#foto_usuario");
const obj_nome_usuario = document.querySelector("#nome_usuario");
const obj_data_post = document.querySelector("#data_post");

let num_post = 0;

//Função para exibir o post
function funExibePost(num_post) {
    obj_foto_post.src = posts[num_post].fotoPost;
    obj_titulo_post.innerHTML = posts[num_post].titulo;
    obj_prg_post.innerHTML = posts[num_post].sub;

    obj_foto_usuario.src = posts[num_post].fotoPerfil;
    obj_nome_usuario.innerHTML = posts[num_post].nomePerfil;
    obj_data_post.innerHTML = posts[num_post].dataPost;
}

funExibePost(num_post);
