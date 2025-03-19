function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') // Aqui está a correção
    var data = new Date()
    var hora = data.getHours()

 

    
    msg.innerHTML = `Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'img/manhã.png'
        document.body.style.backgroundColor='#E4D9CA'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor='#DC661A'
    } else {
        // Boa noite
        img.src = 'img/noite.png'
        document.body.style.backgroundColor='#273953'
    }
}
