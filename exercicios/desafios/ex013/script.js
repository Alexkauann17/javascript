function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('passos')
    var resu = document.getElementById('box')
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        resu.innerHTML = 'Preencha todos as caixas...'
    } else {
        resu.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p <= 0) {
            window.alert ('Passo invalido, PASSO SENDO CONSIDERADO = 1!')
            p = 1
        }

    if (i < f) {
        //contagem crescente
        for(var c = i; c <= f; c += p) {
            resu.innerHTML += `${c} `}
     } else {
        //contagem regressiva
        for(var c = i; c >= f; c -= p) {
            resu.innerHTML += ` ${c}`
        }
     }
     resu.innerHTML += '\u{1F3C1}'
    }

}