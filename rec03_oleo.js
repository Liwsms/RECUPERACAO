//O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a máquina precisa de inspeção.
const readline = require('readline');


const NiveldeOleo = entrada.questionInt(" Digite o Nivel de Oleo:");

let situacao

if (NiveldeOleo >=40 && NiveldeOleo <=80) {
    situacao = "NIVEL NORMAL";
} else {
 situacao = "INSPEÇÃO NECESSÁRIA";

};
console.log(`Nivel de Oleo ${NiveldeOleo}`);
console.log(`situacao ${situacao}`);
