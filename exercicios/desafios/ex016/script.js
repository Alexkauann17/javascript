function finalizar() { 
    var nome = document.getElementById('nome')
    var senha = document.getElementById('senha')
    var fina = document.getElementById('finalizar')
    if (nome.value == `Emily` && senha.value == 3006) {
        window.open('https://www.youtube.com/watch?v=Ao81ziiXHhs','_blank')

    } else {
        window.alert('[ERRO] SENHA OU USUARIO INVALIDA')
    }
}



//if (nome.value == `Emily` && senha.value == 3006)