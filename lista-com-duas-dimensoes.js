const alunos = ["João", "Juliana", "Ana", "Caio"];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);

/* Acessando a aluna "Ana". */
console.log(
  `A nota da aluna ${listaDeAlunosEMedias[0][2]} é ${listaDeAlunosEMedias[1][2]}.`
);
