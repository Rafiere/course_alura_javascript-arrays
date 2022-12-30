const alunos = ["João", "Juliana", "Ana", "Caio"];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

const exibeNomeENota = (aluno) => {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado!`);

    const indice = listaDeAlunosEMedias[0].indexOf(aluno);
    console.log(
      `A nota do aluno ${aluno} é ${listaDeAlunosEMedias[1][indice]}.`
    );
  } else {
    console.log("O aluno não foi encontrado!");
  }
};

exibeNomeENota("João");
