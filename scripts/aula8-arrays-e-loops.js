// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let index = 0; index < copa.length; index++) {
  console.log(`O Brasil ganhou a copa de: ${copa[index]} `);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let index = 0; index < frutas.length; index++) {
  if (frutas[index] === "Pera") {
    console.log("Pera está na posição " + index + " do array.");
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var last = frutas[frutas.length - 1];

console.log(last);
