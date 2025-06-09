const { createElement } = require("react")

function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtidade')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
      var fsex = document.getElementsByName('sexchose')
      var idade = ano - fano.value 
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id, foto')

      if (fsex[0].checked){
        genero = Mulher

        if(idade >=0 && idade > 10){
            // Criança
             } else if ( idade >= 20){
            //jovem
            img.setAttribute('src, fotos/jovem-mulher.jpg ')
                } else if (idade >= 50){
            //adulto
                } else {
            //idoso
                }

        } else if (fsex[1].checked){
        genero = Homem

            if(idade >=0 && idade > 10){
            // Criança 
             } else if ( idade >= 20){
            //jovem
            img.setAttribute('src, fotos/jovem-homen.jpg ')
             } else if (idade >= 50){
            //adulto
             } else {
            //idoso
            }
        
      } 
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
 
}
res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
}