// 1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A';
header[0].style.backgroundColor = '#2E948A';


// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
// console.log(linkCursos);
linkCursos.setAttribute('href', 'cursos.html');


// 3 - Na etapa de depoimentos, o título deveria ser 'O que falam sobre nós'.
document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós';

// 4 - Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.
let titulos = document.querySelectorAll('.titulo');
titulos.forEach((a) => (a.style.textTransform = 'uppercase'));
 
// 5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
document.querySelector("#todos_posts").setAttribute("href", "blog.html");

// 6. Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:
let novoElemento = document.querySelector('#investimentos_poupando_independencia');
novoElemento.innerHTML = novoElemento.innerHTML + 
`<div id="independencia">
<img src="imagens/independencia_financeira.png" width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar agora</a></div>`;
 
// Página Contato

// 1 - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html


// 2 - Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
// let textarea = document.querySelector('#formulario form textarea');
// let telefone = document.createElement('input');
//    telefone.setAttribute("type", "tel");
//    telefone.setAttribute("placeholder", "telefone");
//    form.insertBefore(telefone, textarea);

// 3 - O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;


// 4 - O botão não está do tamanho adequado, precisa ter uma largura maior;


// 5 - Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.