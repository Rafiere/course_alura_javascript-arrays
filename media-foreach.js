const notas = [10, 6.5, 8, 7.5];

/* Quando uma função é parâmetro de outra, ela é uma função callback. Ela será executada para cada elemento do array de notas. */
let soma = 0;
notas.forEach((nota) => {
  soma += nota;
});

const media = soma / notas.length;

console.log(media);
