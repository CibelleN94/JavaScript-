function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nascimento')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0  || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'Homem'
          if (idade >= 0 && idade <10) {
            img.setAttribute('src', 'baby.png')
          }else if (idade <21) {
            img.setAttribute('src', 'adolescentemenino.png')
          } else if (idade < 60){
            img.setAttribute('src', '20anoshomem.png')
        }
        else {
            img.setAttribute('src', 'idoso.png')
        }
          } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //criança
              }else if (idade < 21) {
                img.setAttribute('src', '20anos.png')
              } else if (idade < 50){
                //adulto 
            }
            else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}