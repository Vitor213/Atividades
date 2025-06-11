function contar(){
    var inicio = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")
    if (inicio.value.length == "" || fim.value.length == "" || passo.value.length == ""){
        window.alert('preencha todos os campos! ')
    } else {
        res.innerHTML = 'contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inavalido! considerando passo 1')
            p = 1
        }


        if( i < f){
            for( let c = i; c <= f; c += p)
            res.innerHTML += `  ${c} \u{1f449}`
            } else {
                for( let c =i; c >= f; c-= p)
                    res.innerHTML += ` ${c} \u{1f449}`
            }
    }
}
