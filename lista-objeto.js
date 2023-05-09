const cliente = {
    nome: 'Yago',
    idade: 29,
    telefone: [988198962, 988477018],
}

cliente.enderecos = [{
    cidade: 'Juiz de Fora',
    rua: 'Orestes Fabiano Alves',
    numero: 215,
    cep: 36037120,
    apartamento: true
}]

cliente.enderecos.push({
    cidade: 'Três Rios',
    rua: 'Rio de Janeiro',
    numero: 401,
    cep: 25810030,
    apartamento: false
})

const listaApartamentos = cliente.enderecos.filter(endereco => endereco.apartamento)

console.log(listaApartamentos)
