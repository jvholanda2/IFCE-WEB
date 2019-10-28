let dobro = function (a){
    return 2 * a
}
//funcao arrow sempre é uma função anonima, sempre que for chamar, tem que antes armazenar em uma constante ou variavel
dobro = (a) => {
    return 2 * a
}

dobro = a => 2* a //sem parenteses se tiver apenas um parametro
console.log(dobro(Math.PI))


let ola = function(){
    return 'olá'
}

ola = () => 'olá'
console.log(ola())