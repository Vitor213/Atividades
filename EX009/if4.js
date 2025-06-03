var agora = new Date()
var hora = agora.getHours() // sem as () o codigo não funciona ;-;
console.log("Agora são " + hora + " horas. ")
    if (hora >= 7 && hora <= 12){
    console.log("Bom dia! ")
}   else if (hora < 18){
    console.log("Boa tarde! ")
}   else if(hora > 18 || hora < 24){
    console.log("Boa noite! ")
}