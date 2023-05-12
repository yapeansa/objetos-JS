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

for (let campo in cliente) {
    let tipo = typeof cliente[campo]
    if (tipo != 'object' && tipo != 'function')
        console.log(`A chave ${campo} tem o valor ${cliente[campo]}`)
}
