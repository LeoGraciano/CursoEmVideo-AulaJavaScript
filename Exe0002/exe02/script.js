function confirm() {
    var number = document.getElementById('id_number');
    if (number.value == '') {
        window.alert('Campo em branco sera considerador o valor 0')
    }
    number = Number(number.value)
    var resp = document.getElementById('id_resp')
    resp.innerHTML = 'Tabuada: <br>'
    var table = document.createElement('table');
    table.style = 'text-align: left'
    var tbody = document.createElement('tbody')
    table.appendChild(tbody);
    resp.appendChild(table);
    for (i = 0; i <= 10; i++){
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td = document.createElement('td');
        th.innerHTML = `${number} x ${i} =`
        td.innerHTML = `${number*i}`

        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr)
    }
}
