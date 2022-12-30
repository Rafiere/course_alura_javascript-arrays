const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

const calcularMedia = (notasDaSala) => {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  return somaDasNotas / notasDaSala.length;
};

const mediaGeralJS = calcularMedia(salaJS);
console.log(`Sala JavaScript - Média: ${mediaGeralJS}`);

const mediaGeralJava = calcularMedia(salaJava);
console.log(`Sala Java - Média: ${mediaGeralJava}`);

const mediaGeralPython = calcularMedia(salaPython);
console.log(`Sala Python - Média: ${mediaGeralPython}`);
