let num = [ "carro","cenoura"]

num.push(5)
num.sort()

/*for(let fila=0; fila < num.length; fila ++){
    console.log(`a posicao ${fila} tem o valor ${num[fila]}`)
}
*/
for(let fila in num){
    console.log(`a posicao ${fila} tem o valor ${num[fila]}`)
}
