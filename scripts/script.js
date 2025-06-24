const pag_ativa = location.pathname.toLowerCase(); //Leitura da página ativa

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

//Funcionamento do "Envio" do Formulário + Botão de "Criar Conta" (Login)

if (pag_ativa.includes("login")) {
    const obj_form = document.querySelector("form");
    const obj_botao_criarConta = document.querySelector("#botao_criarConta");

    obj_form.addEventListener("submit", (envio) => {
        envio.preventDefault();

        const obj_email = document.querySelector("#email");
        const obj_senha = document.querySelector("#senha");

        if (obj_email.value === "" || obj_senha.value === "") {
            return;
        }

        alert("Efetuando seu login...");
        location.reload();
    });

    obj_botao_criarConta.addEventListener("click", funCriarConta);

    function funCriarConta() {
        alert("Redirecionando para a página de criar conta...");
        location.reload();
    }

}

//Funcionamento do "click" nas Notícias e nos Posts (Index)

if (pag_ativa.includes("index")) {
    const obj_foto_noticia = document.querySelector("#foto_noticia");
    const obj_foto_post = document.querySelector("#foto_post");
    const obj_foto_usuario = document.querySelector("#foto_usuario");

    obj_foto_noticia.addEventListener("click", funNoticia);
    obj_foto_post.addEventListener("click", funPost);
    obj_foto_usuario.addEventListener("click", funUsuario);

    function funNoticia() {
        alert("Redirecionando para notícia.");
        location.reload();
    }

    function funPost() {
        alert("Redirecionando para o post.");
        location.reload();
    }

    function funUsuario() {
        alert("Redirecionando para o perfil.");
        location.reload();
    }
 
}

//Funcionamento do "Formulário de Pesquisa" (Index, Notícias, Posts e Bandas)

if (pag_ativa.includes("index") || pag_ativa.includes("noticias") || pag_ativa.includes("posts") || pag_ativa.includes("bandas")) {
    const form_pesquisa = document.querySelector("#nav_pesquisa");

    if (form_pesquisa) {
        form_pesquisa.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Pesquisando...");
        });
    }
}

// Funcionamento do Botão de Pesquisa no Corpo (Notícias, Posts e Bandas)

if (pag_ativa.includes("noticias") || pag_ativa.includes("posts") || pag_ativa.includes("bandas")) {
    const botao_pesquisa_corpo = document.querySelector("#botao_pesquisa_corpo");

    if (botao_pesquisa_corpo) {
        botao_pesquisa_corpo.addEventListener("click", () => {
            if (pag_ativa.includes("noticias")) {
                alert("Pesquisando mais notícias...");
            } else if (pag_ativa.includes("posts")) {
                alert("Pesquisando mais posts...");
            } else if (pag_ativa.includes("bandas")) {
                alert("Pesquisando mais bandas...");
            }
        });
    }
}

