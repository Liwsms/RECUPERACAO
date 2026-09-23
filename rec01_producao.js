//Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.

const   QuantidadeCaixasPHora= 75;
const   Horastrabalhadas= 8;

const ProducaonoTotal= QuantidadeCaixasPHora * Horastrabalhadas;

console.log(`Caixas por hora: ${QuantidadeCaixasPHora}caixas`);
console.log(`Horastrabalhadas: ${Horastrabalhadas}horas`);
console.log(`Producaonototal: ${ProducaonoTotal}caixas`);