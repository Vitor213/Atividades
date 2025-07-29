let num = document.getElementById('fnumero')
let lista = document.getElementById('flist')
let resultado = document.getElementById('res')
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

    } else {
        window.alert('Valor errado ou já encontrado na lista!')
    }
}