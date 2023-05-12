const clientes = require('./clientes.json')

function ordenar (clientes, nome) {
    const resultado = clientes.sort((a, b) => {
        if (a[nome] < b[nome])
            return -1
        else if (a[nome] > b[nome])
            return 1
        else
            return 0
    })
    return resultado
}

const listaOrdenadaPorNome = ordenar(clientes, 'nome')

console.log(listaOrdenadaPorNome)
