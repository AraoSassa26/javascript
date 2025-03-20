function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var ano_form = document.getElementById('txtano');
    var res = document.querySelector('div#res');
 
    if (ano_form.value.length == 0 || Number(ano_form.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente');
        return;  // Impede que o restante do código seja executado
    }
 
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(ano_form.value);
    var gênero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
 
    if (fsex[0].checked) {
        gênero = 'Homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebé-M.jpg');  // Criança
        } else if (idade < 30) {
            img.setAttribute('src', 'jovem-M.jpg');  // Jovem
        } else if (idade < 50) {
            img.setAttribute('src', 'adulto-m.jpg');  // Adulto
        } else {
            img.setAttribute('src', 'idoso-M.jpg');  // Idoso
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebé-F.jpg');  // Criança
        } else if (idade < 30) {
            img.setAttribute('src', 'jovem-F.jpg');  // Jovem
        } else if (idade < 50) {
            img.setAttribute('src', 'adulto-F.jpg');  // Adulto
        } else {
            img.setAttribute('src', 'idoso-F.jpg');  // Idoso
        }
    }
 
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.style.textAlign = 'center';
    res.appendChild(img);
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.objectFit = "cover";  // Ajusta a imagem para caber no círculo
    img.style.objectPosition = "top";  // Foca na parte superior da imagem

 }
 