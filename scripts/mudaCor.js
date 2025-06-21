//Funcionalidade para mudar a cor "tema" do site

const pag_ativa_cor = location.pathname.toLowerCase();

//Configurações Gerais
const obj_trocarFundo = document.querySelector("#trocarFundo"); //Pega o checkbox que muda a cor do fundo

const obj_body = document.querySelector("body"); //Pega o corpo do site, onde o principal fundo está

const array_barraPesquisa = document.querySelectorAll(".barraPesquisa");

//Navbar
const obj_navSup = document.querySelector("#navSup");

const obj_navInf = document.querySelector("#navInf");

const array_a = document.querySelectorAll("a"); //Pega todos os links dentro do site

//Main

/* --- Index --- */
const obj_noticiaPrincipal = document.querySelector("#noticia-principal")
const array_noticiaAside = document.querySelectorAll(".noticia-aside");

/* --- Noticias --- */
const array_noticia = document.querySelectorAll(".noticia");

/* --- Posts --- */
const obj_post = document.querySelector(".post");

/* --- Bandas --- */
const obj_table = document.querySelector("table");

//Footer
const obj_footerPT1 = document.querySelector("#footerPT1");
const obj_footerPT2 = document.querySelector("#footerPT2");


obj_trocarFundo.addEventListener("change", funMudaFundo);

function funMudaFundo() {
    if (obj_trocarFundo.checked) {
        //Principal
        obj_body.style.background = 'radial-gradient(#CBCBCB, #A6A6A6)';
        obj_body.style.color = '#000000';

        array_barraPesquisa.forEach(obj_barraPesquisa => {
            obj_barraPesquisa.style.background = '#C0C0C0';
            obj_barraPesquisa.style.color = '#000000';
        })

        //Navbar
        obj_navSup.style.background = 'radial-gradient(#EEEEEE, #FFFFFF)';
        obj_navInf.style.background = 'radial-gradient(#DDDDDD, #CBCBCB)';

        array_a.forEach(obj_a => { //Atravessa todos os links dentro do "array" e muda a cor deles
            obj_a.style.color = '#000000'; 
        })

        //Main

        /* --- Noticias --- */

        array_noticia.forEach(obj_noticia => {
            obj_noticia.style.background = '#A7A7A7';
        })

        /* --- Posts --- */
        if (pag_ativa_cor.includes("posts")) {
            obj_post.style.background = '#A7A7A7';
        }

        /* --- Bandas --- */
        if (pag_ativa_cor.includes("bandas")) {
            obj_table.style.background = 'radial-gradient(#DDDDDD, #CBCBCB)';
        }

        //Footer
        obj_footerPT1.style.background = 'radial-gradient(#DDDDDD, #CBCBCB)';
        obj_footerPT2.style.background = 'radial-gradient(#EEEEEE, #FFFFFF)';


    }
    else {
        //Principal
        obj_body.style.background = 'radial-gradient(#555555, #444444)';
        obj_body.style.color = '#FFFFFF';

        array_barraPesquisa.forEach(obj_barraPesquisa => {
            obj_barraPesquisa.style.background = '#979797';
            obj_barraPesquisa.style.color = '#FFFFFF';
        })


        //Navbar
        obj_navSup.style.background = 'radial-gradient(#111111, #000000)';
        obj_navInf.style.background = 'radial-gradient(#222222, #111111)'; 

        array_a.forEach(obj_a => {
            obj_a.style.color = '#FFFFFF';
        })

        //Main

        /* --- Noticias --- */
        array_noticia.forEach(obj_noticia => {
            obj_noticia.style.background = '#ffffff36';
        })

        /* --- Posts --- */
        if (pag_ativa_cor.includes("posts")) {
            obj_post.style.background = '#ffffff36';
        }

        /* --- Bandas --- */
        if (pag_ativa_cor.includes("bandas")) {
            obj_table.style.background = 'radial-gradient(#222222, #111111)';
        }

        //Footer
        obj_footerPT1.style.background = 'radial-gradient(#222222, #111111)';
        obj_footerPT2.style.background = 'radial-gradient(#111111, #000000)';

    }
}