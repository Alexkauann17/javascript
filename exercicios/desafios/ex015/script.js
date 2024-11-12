var num = document.getElementById('number')
var lista = document.getElementById('sel')
var res = document.getElementById('resul')
let valores = []


function inNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
 }
function adicionar() {
    if(inNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert('valor invalido ou ja encontrado na lista.')
    }
    num.value = ``
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('[ERRO] CAMPO VAZIO OU NUMERO INVALIDO.')
    } else {
     let total = valores.length
     
     res.innerHTML = ``
     res.innerHTML += `<p>O total de numero adicionados foi <strong>${total}</strong></p>`
    }
}