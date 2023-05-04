//Se a peça possuir um peso superior a 100g, pode cadastrar 

let peso = 50;

if(peso < 100){
    console.log("A peça precisa pesar pelo menos 100g")
}else{
    console.log("A peça possui peso adequado e pode ser cadastrada")
}


//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando nao ter capacidade suficiente.

let listaPeças = ["Amortecedor", "Disco de Freio", "Motor"]

if(listaPeças.length < 10){
    console.log("É possível cadastrar mais peças")
}else{
    console.log("Não é possível cadastrar mais peças")
}

//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe mensagem de erro

let NomePeça = "Motor"

if(NomePeça.length <3){
    console.log("Quantidade de caracteres insuficiente para o cadastramento. Inserir nome com pelo menos 3 caracteres.")
}else{
    console.log("Nome válido!")
}