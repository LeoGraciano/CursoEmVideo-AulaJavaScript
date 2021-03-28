function confirm() {

    // var start = 5;
    var start = document.getElementById('id_start');
    if (start.value.length == 0) {
        window.alert('Campo inicíal em branco, será atribuído o valor "0"')
        start.value = 0
        start = Number(start.value)
    } else {
        start = Number(start.value)
    }

    // var end = 10;
    var end = document.getElementById('id_end');
    if (end.value.length == 0) {
        window.alert('Campo inicíal em branco, por favor preencha')
    } else {
        end = Number(end.value)
    }

    // var skip = 1;
    var skip = document.getElementById('id_skip');
    if (skip.value.length == 0 || skip.value <= 0) {
        window.alert('Campo passo inválidos, será atribuído o valor "1"')
        skip.value = 1
        skip = Number(skip.value)
    } else {
        skip = Number(skip.value)
    }
    var res = document.getElementById('id_res')
    res.innerHTML = ''
    var span = document.createElement('span')

    if (start > end) {
        // skip = (-skip)
        for (start; end <= start; start -= skip) {
            span.innerHTML += start + ' &#128073;'
        }
    } else {
        for (start; start <= end; start += skip) {
            span.innerHTML += start + ' &#128073;'
        }
    }
    span.innerHTML += ' &#127937;'
    res.appendChild(span)
}
