const notas = [10, 9.5, 8, 7, 6];

const notasComUmPontoAMais = notas.map((nota) => {
  return (nota += 1);
});

console.log(notasComUmPontoAMais);
