function esUnico(cadena){
    let cadenaArray = [... cadena];
    let caracteresUnicos = [];
    for(let i = 0; i < cadenaArray.length; i++){
        if(caracteresUnicos.includes(cadenaArray[i])){
            return false;
        }else{
            caracteresUnicos.push(cadenaArray[i]);
        }

    }
    return true;
}

console.log(esUnico("David"))