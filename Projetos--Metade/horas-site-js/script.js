function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora =
msg.innerHTML = 'agora são '+ hora+ ' horas.'
if (hora >= 12 && hora <= 18){
    // Boa tarde
}

}
