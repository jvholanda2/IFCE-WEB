function naoLancarExcecao(){}

try{
    if (Math.random() > 0.5) throw new Error('Erro')
}catch(e){
    naoLancarExcecao()
}