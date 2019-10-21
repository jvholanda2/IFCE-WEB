const obj = {
    temp: 0,

    get temperatura(){return this.temp},
    set temperatura(temp){ 
        if(temp>=0){
            this.temp = temp
        }else{
            throw new Error("Valor Proibido")
        }
    }
}

console.log(obj.temperatura = -5)