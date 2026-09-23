//Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção acumulada dos ciclos 1 até 12.

const entrada= require("readline-sync");

const produtosporciclo = entrada.questionInt(" Quantos Produtos por Ciclo?");

for (let ciclo = 1; ciclo <=12;  ciclo++) {
const acumulada = produtosporciclo * ciclo;
console.log(`Ciclo ${ciclo}: ${acumulada} produtos`);

};
