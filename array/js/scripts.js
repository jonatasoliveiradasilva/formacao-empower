// a contagem dos índices sempre começa do 0
// índices

//                   0        1          2           3
let vendedores = ["Enzo", "Manoel", "Valentina", "Aurora"];

console.log(vendedores);

console.log(vendedores[0]);
console.log(vendedores[1]);
console.log(vendedores[2]);
console.log(vendedores[3]);

let carrinho = ["Banana", "Maçã"];

console.log(carrinho);

console.log(carrinho[0]);
console.log(carrinho[1]);

// métodos de arrays

// .push() - adiciona o elemento no FINAL do array
carrinho.push("Uva");

console.log(carrinho);
// imprimiu: ["Banana", "Maça", "Uva"];

// .unshift() - adiciona o elemento no INÍCIO do array
carrinho.unshift("Abacaxi");

console.log(carrinho);
// imprimiu: ["Abacaxi", "Banana", "Maça", "Uva"];

// .pop() - remove o ÚLTIMO elemento do array
carrinho.pop();
console.log(carrinho);

// imprimiu: ["Abacaxi", "Banana", "Maça"];

// .shift() - remove o PRIMEIRO elemento do array
carrinho.shift();
console.log(carrinho);

// métodos mais complexos

// splice é um dos métodos mais complexos
// com ele podemos remover, adicionar ou substituir elementos do array

// parâmetros
// início (índice que indica onde a ação vai começar)
// quantidadeParaRemover
// pra adicionar utilizo o 0 (não quero remover)

// posição             1        2         3
// índice              0        1         2
let carrinhoPlus = ["Caqui", "Manga", "Goiaba"];
console.log(carrinhoPlus[1]);

// adicionar com splice
carrinhoPlus.splice(1, 0, "Morango");
console.log(carrinhoPlus);
//               0         1         2        3
// imprimiu: ["Caqui", "Morango", "Manga", "Goiaba"];

carrinhoPlus.splice(4, 0, "Mamão") // pra adicionar o segundo valor será sempre 0
console.log(carrinhoPlus);
//               0         1         2         3        4
// imprimiu: ["Caqui", "Morango", "Manga", "Goiaba", "Mamão"];

// remover com splice
// carrinhoPlus.splice(indiceQueIndicaOndeComeça, quantosElementosRemover);

carrinhoPlus.splice(1, 2); // na posição 0 remove 2 itens
console.log(carrinhoPlus);

// imprimiu: ["Caqui", "Goiaba", "Mamão"];
// removeu morango e manga

// substituir com splice
let fastFoods = ["Pizza", "Hamburguer", "Batata Frita", "Bacon", "Cheddar", "Pão de Queijo"];

fastFoods.splice(4, 1, "Hot Dog");
console.log(fastFoods);

// imprimiu: ["Pizza", "Hamburguer", "Batata Frita", "Bacon", "Hot Dog", "Pão de Queijo"];

fastFoods.splice(2, 1, "Batata Recheada");
console.log(fastFoods);
