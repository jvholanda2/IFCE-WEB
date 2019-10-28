//criar uma função de uma forma literal
function fun1(){

}//toda função retorna undefined

//armazener em uma variavel
const fun2 = function (){} //se passar o nome da constante com os parametros, roda

//armazenar em um array
const array = [function(a,b){return a+b }, fun1,fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//passar a função como parametro
function run(fun){
    fun()

}

run(function(){console.log("Executando")})

//uma funcao pode rtornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)






