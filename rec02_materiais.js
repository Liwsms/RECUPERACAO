//Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.



const require=('readline-sync');

console.log('===REGISTRO DE MATERIAIS===')
const Nomepeca = entrada.questionInt ("Nome:");
const Quantidade = entrada.questionInt ("Quantidade Comprada: ");
const PrecoUnitario = entrada.questionInt ("Preco Unitario: R$")

const Valototal=  Quantidade * PrecoUnitario


console.log("\n===RESUMO===")
console.log(`quantidade :${Quantidade} `);
console.log(`preco :${PrecoUnitario} `);
console.log(`PrecoUnitario: R$ ${totalFixed(2)}`);
console.log(`ValortotalCompra: R$ ${totalFixed(2)}`);