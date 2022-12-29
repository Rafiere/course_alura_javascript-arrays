const notas = [10, 5, 7, 8, 6];

/* Removendo o último elemento do array "notas". */
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));
