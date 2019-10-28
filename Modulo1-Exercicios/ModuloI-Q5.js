const aluno = {
    nome: 'iago',
    notas: [
        {nome: 'fisica', valor: 5},
        {nome: 'estatistica', valor: 4},
        {nome: 'probabilidade', valor: 1}
    ]
}


const getValor = aluno => aluno.valor
console.log(aluno.notas.map(getValor))

