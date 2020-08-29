// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll("p");

paragrafo.forEach(function (item, index) {
  // console.log(item, index);
});

// Mostre o texto dos parágrafos no console

const pText = document.querySelectorAll("paragrafo");
const pTextArray = Array.from(pText);

pTextArray.forEach(function (item) {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

//parêntese nos argumentos
imgs.forEach(item, (index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
