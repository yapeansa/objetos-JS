const clientes = require('./clientes.json')

function encontrar (cliente, chave, valor) {
    return clientes.find(item => item[chave].includes(valor))
}

const encontrado = encontrar(clientes, 'nome', 'Kirby')

const encontrado2 = encontrar(clientes, 'telefone', '18977479960')

console.log(encontrado2)
