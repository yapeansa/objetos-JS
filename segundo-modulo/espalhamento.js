const cliente = {
    nome: 'Yago',
    idade: 29,
    email: 'yapeansa@gmail.com',
    telefone: [988198962, 988477018]
}

cliente.enderecos = [{
    cidade: 'Juiz de Fora',
    rua: 'Orestes Fabiano Alves',
    numero: 215,
    cep: 36037120,
    apartamento: true
}]

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)
