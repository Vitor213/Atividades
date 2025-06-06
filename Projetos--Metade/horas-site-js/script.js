function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours
msg.innerHTML = 'agora são '+ hora+ ' horas.'
if (hora >= 0 && hora < 12){
    // Bom dia
    img.src = 'foto-manha.png'
    document.body.style.background = '#afb0aa'
} else if (hora >= 12 && hora <= 18){
    // Boa tarde
    img.src = 'foto-manha.png'
    document.body.style.background = '#afb7aa'
} else{
    //Boa noite
    img.src = 'foto-manha.png'
    document.body.style.background = '#afb7ba'
}

}
