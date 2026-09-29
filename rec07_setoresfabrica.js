const entrada = require("readline-sync");

console.log("Lista de setores:");

for (let i = 0; i <= 6; i++) {
let nomedosetor =readline.question(`Digite o nome do setor ${i + 1}:`);
setores.push(nomedosetor);
};

console.log("\n--- lista dos setores---")
for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1}- ${setores[1]}`);
}