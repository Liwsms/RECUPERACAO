const entrada = require(`readline-sync`)

console.log("=== CLASSIFICACAO ===")

const vibracao = entrada.questionFloat("Digite o valor da vibracao?: ")

if (vibracao <= 3) {
    console.log(`A vibracao esta  ${vibracao.toFixed(2)}  ESTAVEL`)
} else if (vibracao <=6) {
    console.log(`A vibracao  ${vibracao.toFixed(2)} exibe ATENCAO`)
} else {
    console.log(`A vibracao é  ${vibracao.toFixed(2)}  CRITICA`)
} 