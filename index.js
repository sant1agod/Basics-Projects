// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

//Utilizando cotagem nas listas 
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);

//Utilizando o FOR em uma lista
let matrizDeEstudantes = ["Helena", "Chico", "Mário"];
let qtdDeEstudantes = matrizDeEstudantes.length;
for (let indice = 0; indice < qtdDeEstudantes; indice++) {
	const alunoCorrente = matrizDeEstudantes[indice];
	console.log(alunoCorrente);
}

//Com o do:
let blocoDeEstudantes = ["Helena", "Chico", "Mário"];
let numeroDeEstudantes = blocoDeEstudantes.length;
let inicio = 0;

do {
	console.log(blocoDeEstudantes[inicio]);
	inicio++;
} while (inicio < numeroDeEstudantes);

//------------------------------------------------//

//Com o while:
let listDeEstudantes = ["Helena", "Chico", "Mário"];
let contDeEstudantes = blocoDeEstudantes.length;
let beging = 0;
while (inicio < listDeEstudantes) {
	console.log(contDeEstudantes[inicio]);
	inicio++;
}

//Exemplo de FOR 
for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}

//As estruturas permitem que além dos recursos de verificar o tamanho da lista, também seja possível inserir um novo item ou remover.4
let listinhaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadezinhaDeEstudantes = listaDeEstudantes.length;

listaDeEstudantes.push("José");
console.log(listaDeEstudantes);

// incluir condicionais para verificar se é possível ou não adicionar um novo item
let listonaDeEstudantes = ["Helena", "Chico", "Mário", "Mariana", "Maria"];
let quantidadezonaDeEstudantes = listonaDeEstudantes.length;
if (quantidadezonaDeEstudantes < 5) {
	listonaDeEstudantes.push("José");
console.log(listonaDeEstudantes);
} else {
    console.log("Não é possível inserir mais alunos nesta turma")

}
