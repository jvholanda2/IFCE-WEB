var array = [5, 6, 10, 4, 3, 7, 1]

var soma = array.reduce((elem,nextElem)=>elem+nextElem)
var media = soma/array.length
var maiores = array.filter((elem)=> elem>media)
console.log(maiores)