function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('age')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero= 'Homem'
            if(idade > 0 && idade <5){
                img.setAttribute('src','bebecerto.png')
            }else if (idade < 18){
                img.setAttribute('src','menino.png')
            }else if (idade<50){
                img.setAttribute('src','homem.png')
    
            }else {
                img.setAttribute('src','vovocerto.png')
            }
        }else if (fsex[1].checked){
            genero='Mulher'
            if(idade > 0 && idade <5){
                img.setAttribute('src','bebecerto.png')
            }else if (idade < 18){
                img.setAttribute('src','menina.png')
            }else if (idade<50){
                img.setAttribute('src','mulher.png')
            }else {
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
