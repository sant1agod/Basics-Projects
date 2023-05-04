SaldoInicial = parseInt(prompt("Qual o saldo inicial de peças?"));
document.write("Saldo Inicial: " + SaldoInicial + "<br>");
encerrar = "n";
while(encerrar == "n")
{
TipoDeEntrada = parseInt(prompt("Digite 1 para compra de peças e 2 para venda de Peças"));  
if(TipoDeEntrada == 1)
{
    quantidade = parseInt(prompt("Qual a quantidade de peças que deseja adicionar ao estoque?"));
    SaldoInicial = SaldoInicial + quantidade;
    document.write("Entrada : " + quantidade + "<br>");
}
if(tipo == 2)
{
    if(saldo>=quantidade)
    {
    quantidade = parseInt(prompt("Qual a quantidade de peças que deseja remover do estoque?"));
    SaldoInicial = SaldoInicial - quantidade;
    document.write("Saída : " + quantidade + "<br>");
    }
    else
    {
    document.write("Saldo Insuficiente" + "<br>");
    alert("Saldo Insuficiente")
}    
}
document.write("Saldo: " + saldo + "<br>");
encerrar = prompt ("Deseja encerrar? (s/n)")
}
document.write("Encerrando Sistema" + "<br>");
