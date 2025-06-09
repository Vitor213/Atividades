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
      

      if (fsex[0].checked){
        genero = 'Mulher'

        if(idade >=0 && idade < 10){
            // Criança
             } else if ( idade < 21){
            //jovem
                } else if (idade < 50){
            //adulto
                } else {
            //idoso
                }

        } else if (fsex[1].checked){
        genero = 'Homem'

            if(idade >=0 && idade < 10){
            // Criança 
             } else if ( idade < 21){
            //jovem
             } else if (idade < 50){
            //adulto
             } else {
            //idoso
            }
        
      } 
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
        res.style.textAlign = 'center'

 
}

}