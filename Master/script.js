function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
      alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
          genero = 'Masculino'
          if(idade >=0 && idade < 15) {
            //Criança
            img.setAttribute('src', 'bb-menino.png')
          } else if(idade >= 15 && idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovem-adulto.png')
          } else if(idade < 50) {
            //Adulto
            img.setAttribute('src', 'adulto-homem.png')
          } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
          }
        } else if (fsex[1].checked) {
          genero = 'Femenino'
          if(idade >=0 && idade < 15) {
            //Criança
            img.setAttribute('src', 'menina.png')
          } else if(idade >= 15 && idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovem-mulher.png')
          } else if(idade < 50) {
            //Adulto
            img.setAttribute('src', 'adulta-mulher.png')
          } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
          }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Sexo  ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
 