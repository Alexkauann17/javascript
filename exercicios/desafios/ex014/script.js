function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('selectab')
    if (num.value.length == 0) {
        window.alert('Por Favor Digite um numero')
    } else {
        var n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        if (n == 0) {
            window.alert ('Numero Invalido, numero mudado para [1]')
            n = 1
        }
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}