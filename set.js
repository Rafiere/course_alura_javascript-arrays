const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

/* O "Set" é uma classe que não aceita repetições. */
const nomesSemRepeticaoSet = new Set(nomes);

const nomesSemRepeticaoLista = [...nomesSemRepeticaoSet];

console.log(nomesSemRepeticaoLista);
