function carregar(){
    msg = document.querySelector('div#msg')
    img = document.querySelector('img')
    data = new Date()
    hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora <= 12){
        img.src = 'imagemmanha.png'
        document.body.style.background = '#e2cd52'
    } else if (hora >= 13 && hora <= 17) {
        img.src = 'imagemtarde.png'
        document.body.style.background = '#eb7f37'
    } else if (hora == 3){
        img.src = 'imagem3madrugada.png'
        document.body.style.background = '#000000'
    } else if (hora >= 0 && hora <= 5) {
        img.src = 'imagemmadrugada.png'
        document.body.style.background = '#454650'
    } else {
        img.src = 'imagemnoite.png'
        document.body.style.background = '#4d30f0'
    }
}