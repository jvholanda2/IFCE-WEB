//this/self forma de referenciar o objeto atual daquela execução

const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)//acessa o atributo do objeito
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)//sempre o this sera resolvido para pessoa/ passa-se o objeto no qual vc quer que seja resolvido o this
falarDePessoa()