const joao = {
    nome: 'João',
    saudacao(){
        console.log(`Olá ${this.nome}`)
    }
}

var maria = {
    nome: 'Maria'    
}

maria.saudacaoMaria = joao.saudacao
console.log(maria.saudacaoMaria())