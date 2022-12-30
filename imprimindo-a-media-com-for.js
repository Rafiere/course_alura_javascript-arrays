const notas = [10, 6.5, 8, 7.5];

let soma = 0;
for (let indice = 0; indice < notas.length; indice++) {
  soma = soma += notas[indice];
}

console.log(soma / notas.length);
