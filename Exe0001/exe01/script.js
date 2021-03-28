function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    // var horas = 14;
    var horas = data.getHours();
    if (horas >= 0 && horas <= 12) {
        img.src = 'manha.png'
        período = "Bom dia !!!"
        document.body.style.background = '#d97f42'
    } else if (horas >= 12 && horas <=18) {
        img.src = 'tarde.png'
        período = "Boa tarde !!!"
        document.body.style.background = '#70333d'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#2e2c27'
        período = "Boa noite !!!"
    };
    msg.innerHTML = `Agora são ${horas} horas. ${período}`;
}
