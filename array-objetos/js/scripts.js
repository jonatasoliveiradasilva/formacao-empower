//                     0                1             2
let artistas = ["Mariah Carey", "Roberto Carlos", "Simone"];
console.log(artistas);

// .push() - adiciona no final
artistas.push("Adele");
console.log(artistas);

// .unshift() - adiciona no início
artistas.unshift("Rihanna");
console.log(artistas);

// .pop() - remove o último elemento
artistas.pop();
console.log(artistas);

// .shift() - remove o primeiro elemento
artistas.shift();
console.log(artistas);

// splice - adicionar, remover ou substituir

//         0                1             2
// ["Mariah Carey", "Roberto Carlos", "Simone"];

// artistas.splice(2,1);
console.log(artistas);

// adicionar

// artistas.splice(indiceQueInicia, quantosRemover, itensQueQueroAdicionar);
// artistas.splice(1, 0, "Elton John", "Roupa Nova", "Justin Bieber");
console.log(artistas);

// remover

// artistas.splice(indiceQueInicia, quantosRemover);
// aponta para a Simone (índice 2) - quantos eu quero remover? 1

// substituir

// artistas.splice(indiceQueInicia, quantosRemover, itensQueQueroAdicionar);
artistas.splice(2, 1, "Ivete Sangalo");
console.log(artistas);

// [ 0 "Mariah Carey", 1 "Elton John", 2 "Ivete Sangalo", 3 "Justin Bieber", 4 "Roberto Carlos"];

// método Slice - cria uma cópia sem mexer no array original

// let artistasCopia = artistas.slice(2);
console.log(artistasCopia);

// array.slice(indiceQueInicia, indiceQueQuerParar); 
// o índice que eu quero parar não é incluido no novo array

// let artistasCopia = artistas.slice(1, 4);
console.log(artistasCopia);

// objetos {}
// coleção de propriedades: chave e valor;

let pessoa = {
    // chave: valor,
    nome: "Karynne",
    idade: 18,
    profissao: "Dev",
    bebidaPreferida: "Café",
};

// console.log(pessoa);

console.log(pessoa.nome); // no objeto "pessoa" acessa o nome
console.log(pessoa.bebidaPreferida); // no objeto "pessoa" acessa a bebidaPreferida
console.log(pessoa.idade); // no objeto "pessoa" acessa a idade

// let donaLuciaDaFeirinha = [{objeto}, {objeto}, {objeto}];

let donaLuciaDaFeirinha = [ 
    {
        vendedor: "Rita",
        produtos: ["Cenoura", "Batata", "Beterraba"], // indice 0
        categoria: "Legumes",
    }, 
    {
        vendedor: "Renê",
        produtos: ["Abacate", "Abacaxi", "Caqui"], // indice 1
        categoria: "Frutas",
    }, 
    {
        vendedor: "Luciana",
        produtos: ["Alface", "Agrião", "Coentro"], // indice 2
        categoria: "Verduras",
    },
];

console.log(donaLuciaDaFeirinha);
console.log(donaLuciaDaFeirinha[0]); // acessa um item do array de objetos
console.log(donaLuciaDaFeirinha[0].produtos);
console.log(donaLuciaDaFeirinha[0].produtos[1]);
