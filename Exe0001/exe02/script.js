function check() {
    var date = new Date();
    var ano = date.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    res.innerHTML=''
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR]: Verifique os dados e digite novamente')

    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.id = 'foto'

        if (fsex[0].checked) {
            genero = 'Um Homem';
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','idades/hc.png');
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','idades/hj.png');
            } else if (idade >= 21 && idade < 60) {
                //Aduto
                img.setAttribute('src','idades/h.png');
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src','idades/hi.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Uma Mulher';
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','idades/mc.png');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','idades/mj.png');
            } else if (idade < 60) {
                //Aduto
                img.setAttribute('src','idades/m.png');
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src','idades/mi.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `${genero} com a idade de: ${idade} anos`;
        res.appendChild(img);

    }
}
