function pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)//dispara uma outra funcao, a partir do intervalo que eu dei em milisegundos 1000 milisegundos =1 segundo.
}

new pessoa
