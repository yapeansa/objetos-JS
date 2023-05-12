const cliente = {
    nome: 'Yago',
    idade: 29,
    email: 'yapeansa@gmail.com',
    telefone: [988198962, 988477018],
}

// cliente.enderecos = [{
//     cidade: 'Juiz de Fora',
//     rua: 'Orestes Fabiano Alves',
//     numero: 215,
//     cep: 36037120,
//     apartamento: true
// }]

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes('enderecos'))
    console.error('Erro. É necessário ter um endereço cadastrado.')

