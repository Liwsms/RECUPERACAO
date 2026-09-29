const entrada = require('readline-sync');
const funcoes = require('./funcoesOrçamento');

const nome = entrada.question("Digite o seu nome");
const valormateriais = entrada.question("Digite o valor do materiais:");
const Horasserviço = entrada.question("Digite as horas de serviço:");

const MaoObra = funcoes.calculaarMaodeObra(Horasserviço);
const total = valormateriais + MaoObra
const desconto = funcoes.verificarDesconto(total)

console.log("=".repeat(20))
console.log(`clientes:${nome}`)
console.log(`materiais:${valormateriais}`)
console.log(`maodeobra:${MaoObra}`)
console.log(`total: R$${total}`)
console.log(`desconto ${desconto}`)
    

