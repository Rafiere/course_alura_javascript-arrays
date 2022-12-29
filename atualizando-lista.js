const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

/* Estamos dizendo que, começando do index "1", que contém a aluna "Ana", queremos remover dois alunos, que serão os alunos "Ana" e "Caio". O terceiro parâmetro é o valor que colocaremos no lugar dos que forem removidos, assim, retiraremos os alunos "Ana" e "Caio" e adicionaremos o aluno "Rodrigo". */
console.log(nomes.splice(1, 2, "Rodrigo"));
