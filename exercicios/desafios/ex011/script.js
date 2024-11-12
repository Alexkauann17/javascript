function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
     var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = "#a8734e"
        document.body.style.color = "white"
        msg.style.color = "black"
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = "#ff8911"
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = "#00122f"
        document.body.style.color = "white"
        msg.style.color = "black"
    }

}
