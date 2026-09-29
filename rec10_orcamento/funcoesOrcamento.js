function calcularMaodeObra(horas) {
    const valorHora = 95.00
    return horas * valorHora
}

function calcularTotal(ValorMaterial,horas) {
    valormaterial + calcularMaodeObra(horas)

}
function verificarDesconto(total){
    if (total >= 1000) {
        return "DESCONTO DE 10%"
    }else{
        return "SEM DESCONTO"
    }
}
Module.exports = {
    calcularMaodeObra,
    calcularTotal,
    verificarDesconto
}