// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
console.log(/*var,*/ cor, marca, portas); //está jogando um 'var' dentro do console log e também porque console está fora do escopo de const e let

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2; //deve ser declarado do lado de fora
  return x + dois;
}
function dividirDois(x) {
  return x + dois; //é pra dividir, não somar
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50; // definir como const

for (var numero = 0; numero < 10; numero++) {
  //definir como let
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
