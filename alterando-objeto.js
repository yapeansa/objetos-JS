const pessoa = {
    nome: 'Yago',
    idade: 29,
}

console.log(pessoa)

pessoa.telefone = 988198962

console.log(pessoa)

delete pessoa.idade

console.log(pessoa)

pessoa.endereco = {
    cidade: 'Juiz de Fora',
    rua: 'Orestes Fabiano Alves',
    numero: 215,
    cep: 36037120
}

console.log(pessoa)
