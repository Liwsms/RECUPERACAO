const entrada =require('readline-sync');

const ferramentas = [];
for (let i = 0; i<=3; i++ ){
  const ferramentas = {
nome: entrada.question(`Digite o nome da ferramenta: ${i+1}`),
 quantidade: entrada.question(`Digite a quantidade de ferramentas:${i+1}`),
 minimo : entrada.question(`Digite o estoque minimo ${i+1}`)

};
 ferramenta.push(ferramentas);

}

for(let i =0; i < ferramentas.length; i++){
    const produto =ferramentas[i];

    let situacao;
    if(produto.quantidade < produto.minimo){
        situacao = "REPOR ESTOQUE";
    
    }else{
        situacao = "ESTOQUE SUFICIENTE";
    }
console.log(`ferramentas:${produto.nome}`);
console.log(`quantidade:${produto.quantidade}`);
console.log(`minimo:${produto.minimo}`);
console.log(`situacao ${situacao}`);
console.log("-.repeat(20)");
}
