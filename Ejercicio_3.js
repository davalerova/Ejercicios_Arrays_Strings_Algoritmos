function compresionCadena(cadena){
    cadenaArray = [...cadena];
    char = [cadenaArray[0]];
    count = [1];
    for(let i = 1; i < cadena.length; i++){
        if (cadenaArray[i] === cadenaArray[i-1]){
            if(cadenaArray[i] === char[char.length - 1]){
                count[count.length - 1]++;
            }
            else{
                char.push(cadenaArray[i]);
                count.push(1);
            }
        }else{
            char.push(cadenaArray[i]);
            count.push(1);
        }
    }
    let cadenaComprimida = "";
    for(let i = 0; i < char.length; i++){
        cadenaComprimida += char[i] + count[i];
    }
    return cadenaComprimida;
}
console.log(compresionCadena("aabcccccaaa"));