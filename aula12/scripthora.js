function carregar(){
var msg = window.document.querySelector('div#msg')
var msg2 = window.document.querySelector('div#msg2')
var img1 = window.document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
 msg.innerHTML = `São ${hora} horas.`
 
 if ( hora >= 0 && hora < 12) {
    img1.src = 'imagens/bomdia.png'
    msg2.innerHTML += `Bom dia!`
    document.body.style.background = '#fff3b9'
 } else if (hora >=12 && hora <18) {
    msg2.innerHTML += `Boa tarde!`
    img1.src =' imagens/boatarde.png'
    document.body.style.background = '#ffa003'
 } else {
    msg2.innerHTML += `Boa noite!`
    img1.src = 'imagens/boanoite.png'
     document.body.style.background = '#383455'
 }
}
