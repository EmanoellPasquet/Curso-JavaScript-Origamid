// Retorne o url da página atual utilizando o objeto window

const url = window.location.href;
console.log(url);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const selectedClass = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const lang = navigator.language || navigator.userLanguage;
console.log(lang);

// Retorne a largura da janela

const vw = window.innerWidth;
console.log(vw);
