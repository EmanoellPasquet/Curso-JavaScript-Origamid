// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: "Emanoell",
  sobrenome: "Pasquet",
  idade: 29,
  profissao: "Desenvolvedor Frontend",
  possuiFaculdade: "Em andamento",
};
// Crie um método no objeto anterior, que mostre o seu nome completo

meusDados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  cor: "preto",
  idade: 10,
  raça: "labrador",
  latir(pessoa) {
    if (pessoa === "Homem") {
      return "Cachorro latindo";
    } else {
      return "Cachorro não latiu";
    }
  },
};

console.log(cachorro.latir("homem"));
