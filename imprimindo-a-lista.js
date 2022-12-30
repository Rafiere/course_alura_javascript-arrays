const numeros = [100, 200, 300, 400, 500, 600];

numeros.forEach((numero, index) => {
  console.log(`O número ${numero} está no index ${index} da lista.`);
});

console.log("\n");

for (let indice = 0; indice < numeros.length; indice++) {
  console.log(`O número ${numeros[indice]} está no index ${indice} da lista.`);
}
