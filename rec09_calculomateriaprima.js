const entrada =require('readline-sync');

function calcularAproveitamento(util,total){
    return (util / total) *100;
}
function classificacaorAproveitamento(percentual) {
 if (percentual >=90) {
    return "EXCELENTE";
 } else if (percentual = 75 & percentual <= 89.99) {
    return "ADEQUADO";

 } else{
    return "REVISAR PROCESSO";
 }
}
const QuantidadeTotal = entrada.questonFloat("Quantidade Total:");
const QuantidadeUtil = entrada.questionFloat("Quantidade Util");

 const calcular =calcularAproveitamento(QuantidadeUtil, QuantidadeTotal);
 const classificacao =classificacaorAproveitamento();

 console.log("\n=== RELATÓRIO===");
console.log(`total: ${QuantidadeTotal}`);
console.log(`util:${QuantidadeUtil}`);
console.log(`percentual:${aproveitamento}%`);
    console.log(`classificacao:${classificacaoaproveit}`);
