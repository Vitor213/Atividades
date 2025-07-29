let num = document.getElementById('fnumero')
let lista = document.getElementById('flist')
let res = document.getElementById('resultado')
let valores = []

function isnumero(n){
if (Number(n) >= 1 && Number(n) <= 100 ){
    return true
        } else{
            return false
        }
}

function inlist(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }   else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adiconado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor errado ou já encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar (){
    if(valores.length == 0){
        window.alert('Nao a dados para finalizar o processo')
    } else{

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }   
        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} elementos no total. </p>`
        res.innerHTML += `<p> O maior valor e ${maior}. </p>`
        res.innerHTML += `<p> O menor valor e ${menor}. </p>`
        res.innerHTML += `<p> A soma desses valores e de ${soma}. </p>`
        res.innerHTML += `<p> E sua media de ${media}. </p>`
    }
}