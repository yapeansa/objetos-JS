const cliente = {
    nome: 'Yago',
    idade: 29,
    cpf: '12936274702',
    email: 'yapeansa@gmail.com'
}

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`)

console.log(`Os três primeiros dígitos do CPF do cliente ${cliente.nome} são ${cliente.cpf.slice(0, 3)}.`)
